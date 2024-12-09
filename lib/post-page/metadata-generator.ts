import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

interface AuthorReference {
  twitterCreator?: string;
}

interface PostDetails {
  title: string;
  summery: string; // Note: "summery" might be a typo of "summary"
  canonical_url?: string;
  authorReference: AuthorReference;
  isHidden: boolean | null;
  image: {
    url: string;
  };
  metaKeywords?: string;
}

export async function generateBlogPostMetadata({
  params,
  getPostDetails,
}: PageProps & {
  getPostDetails: (slug: string) => Promise<PostDetails[]>;
}): Promise<Metadata> {
  const details = await getPostDetails(params.slug);
  const postDetails = details[0];

  if (!details || !postDetails) notFound();

  const canonicalString = `/blog/${params.slug}`;
  const page_title = postDetails.title;
  const page_description = postDetails.summery;
  const canonical_url = postDetails.canonical_url ?? canonicalString;
  const twitter_creator =
    postDetails.authorReference.twitterCreator ?? "@permit_io";
  const shouldIndex =
    postDetails.isHidden === null ? true : !postDetails.isHidden;
  const baseUrl = "https://www.permit.io";

  return {
    title: page_title,
    description: page_description,
    openGraph: {
      title: page_title,
      description: page_description,
      url: `${baseUrl}/blog/${params.slug}`,
      images: postDetails.image.url,
      type: "website",
    },
    twitter: {
      title: page_title,
      description: page_description,
      creator: twitter_creator,
      images: [postDetails.image.url],
      card: "summary_large_image",
    },
    alternates: {
      canonical: canonical_url,
    },
    keywords: postDetails.metaKeywords ?? "",
    robots: {
      index: shouldIndex,
      follow: true,
    },
  };
}
