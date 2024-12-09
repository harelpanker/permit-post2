import { FC } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type TextProps = {
	styles?: string;
	src: string;
	alt?: string;
	width: number;
	height: number;
	priority?: boolean;
};

const base64 =
	'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB2aWV3Qm94PSIwIDAgMSAxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiByeD0iMC4wOSIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzEyNjE2XzMyOSkiIGZpbGwtb3BhY2l0eT0iMC40Ii8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMTI2MTZfMzI5IiB4MT0iMSIgeTE9Ii01Ljk2MDQ2ZS0wOCIgeDI9IjUuOTYwNDZlLTA4IiB5Mj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjREE4Q0ZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGQjE3MiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=';

const RemoteImage: FC<TextProps> = ({ src, styles, alt = '', width, height, priority }) => {
	return (
		<Image
			src={src}
			alt={alt}
			width={width}
			height={height}
			placeholder='blur'
			blurDataURL={base64}
			className={cn(styles)}
			priority={priority ? true : false}
		/>
	);
};

export default RemoteImage;
