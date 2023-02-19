import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack5';
import { ResumeProps } from '../../pages/Resume/Resume.props';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
export const ResumeFile = ({ ...props }: ResumeProps): JSX.Element => {
	const LINK =
		'https://raw.githubusercontent.com/Whyareyouu/my_portfolio/master/client/src/assets/resumeEN.pdf';
	const [width, setWidth] = useState<number>(1200);

	useEffect(() => {
		setWidth(window.innerWidth);
	}, []);
	return (
		<div className='flex justify-center' {...props}>
			<Document className='relative' file={LINK} externalLinkTarget='_blank'>
				<Page
					scale={width > 768 ? 1 : 0.5}
					className='md:max-w-[320px]'
					pageNumber={1}
					renderTextLayer={false}
					renderAnnotationLayer={false}
				/>
			</Document>
		</div>
	);
};
