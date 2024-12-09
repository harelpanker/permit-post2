'use client';

import { FC, useEffect } from 'react';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import { FancyboxWrapper } from '@/components/FancyboxWrapper';
import { unified } from 'unified';
// @ts-expect-error
import rehypeParse from 'rehype-parse/lib';
import rehypeStringify from 'rehype-stringify';
import { visit } from 'unist-util-visit';
import { ArticleProps } from '@/lib/types/post-page/page-props';
import parameterize from 'parameterize';
import TableOfContents from './TableOfContents';
import Aside from './Aside';
import ArticleAuthors from './ArticleAuthors';

import hljs from 'highlight.js/lib/common';
import 'highlight.js/styles/night-owl.css';

const ArticleBody: FC<ArticleProps> = ({ post, readMore }) => {
	const toc: { id: string; title: string }[] = [];

	useEffect(() => {
		if (typeof window !== 'undefined') {
			hljs.highlightAll();
		}
	}, []);

	useEffect(() => {
		const images = document.querySelectorAll('.prose img');
		const links = document.querySelectorAll('.prose a');
		const filteredLinks = Array.from(links).filter(
			(link) => !(link instanceof HTMLAnchorElement) || !link.href.includes('https://www.permit.io/')
		);

		filteredLinks.forEach((link) => {
			link.setAttribute('target', '_blank');
			link.setAttribute('rel', 'noopener noreferrer');
		});

		images.forEach((image) => image.setAttribute('data-fancybox', 'gallery'));
	}, []);

	const content = unified()
		.use(rehypeParse, { fragment: true })
		.use(() => {
			return (tree: any) => {
				visit(tree, 'element', (node) => {
					if (node.tagName === 'h2') {
						// heading.textContent?.replace(/\s+/g, '-').toLowerCase()
						const id = parameterize(
							node.children[0].value ? node.children[0].value : node.children[0].children[0].value
						);
						node.properties.id = id;

						toc.push({
							id,
							title: node.children[0].value ? node.children[0].value : node.children[0].children[0].value,
						});
					}
				});
			};
		})
		//@ts-ignore
		.use(rehypeStringify)
		.processSync(post.richText.html)
		.toString();

	return (
		<Section className='bg-fdf3ec'>
			<Container className='grid max-w-screen-lg grid-cols-1 gap-8 lg:grid-cols-7'>
				<div className='flex flex-col gap-y-3 pb-12 lg:col-span-5 lg:pb-24'>
					{toc.length > 0 ? <TableOfContents toc={toc} /> : null}
					{/* content */}
					<FancyboxWrapper>
						<div
							className='rich-text prose-blockquote:border-theme_black prose-th:text-theme_white prose prose-base prose-slate prose-h2:-mt-20 prose-h2:text-balance prose-h2:pt-32 prose-h2:text-_451E11 prose-h3:text-balance prose-h3:text-_451E11 prose-h4:text-balance prose-h4:text-_451E11 prose-p:text-pretty prose-p:text-_451E11 prose-a:text-blue-700 hover:prose-a:text-blue-500 prose-blockquote:text-xl prose-strong:text-inherit prose-code:rounded prose-code:bg-_451E11/10 prose-code:px-1 prose-code:py-1 prose-code:font-medium prose-code:italic prose-code:text-_451E11 prose-pre:p-0 prose-li:text-_451E11 prose-li:marker:text-_451E11 prose-table:w-full prose-table:border-collapse prose-table:border-_451E11 prose-thead:border-none prose-tr:border-_451E11 prose-th:border-_451E11 prose-th:bg-_451E11 prose-th:p-2 prose-td:border-_451E11 prose-td:p-2 max-w-3xl overflow-hidden transition duration-500'
							dangerouslySetInnerHTML={{ __html: content }}
						/>
					</FancyboxWrapper>

					{/* authors */}
					{post.authorReference ? (
						<ArticleAuthors authorReference={post.authorReference} authorSecondary={post.authorSecondary} />
					) : null}
				</div>
				<Aside post={post} readMore={readMore} />
			</Container>
		</Section>
	);
};

export default ArticleBody;
