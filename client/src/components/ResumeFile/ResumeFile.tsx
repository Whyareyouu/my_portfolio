import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import resume from '../../assets/resumeEN.pdf';
import { ResumeProps } from '../../pages/Resume/Resume.props';
export const ResumeFile = ({ ...props }: ResumeProps): JSX.Element => {
	return (
		<div className='flex justify-center' {...props}>
			<Document className='relative' file={resume} externalLinkTarget='_blank'>
				<Page
					pageNumber={1}
					renderTextLayer={false}
					renderAnnotationLayer={false}
				/>
			</Document>
		</div>
	);
};