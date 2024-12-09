'use client';

import React, { useEffect } from 'react';

// docs: https://fancyapps.com/docs/ui/fancybox/react
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

type FancyboxWrapperProps = {
	children: React.ReactNode;
};

export function FancyboxWrapper({ children }: FancyboxWrapperProps) {
	useEffect(() => {
		Fancybox.bind('[data-fancybox]', {});

		return () => {
			Fancybox.destroy();
		};
	}, []);

	return <>{children}</>;
}
