'use client';

import { BiFile } from 'react-icons/bi';

interface downloadResumeProps {
  dataResume: string;
  FullName: string;
}

const DownloadResume: React.FC<downloadResumeProps> = ({
  FullName,
  dataResume,
}) => {
  const download = (url: string, name: string, redirectTo: string) => {
    if (!url) {
      throw new Error('Resource URL not provided! You need to provide one');
    }
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobURL;
        a.style.display = 'none';

        if (name && name.length) a.download = name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        if (redirectTo) {
          window.location.href = redirectTo;
        }
      })
      .catch(() =>
        console.error(
          'Something went wrong in fetching file data for download.'
        )
      );
  };

  const handleDownload = () => {
    const driveUrl = dataResume;
    const fileName = `${FullName}-Curriculo.pdf`;
    const redirectTo = '';

    download(driveUrl, fileName, redirectTo);
  };

  return (
    <button
      onClick={handleDownload}
      className='flex items-center justify-center w-full gap-x-2 bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md duration-200 py-2 text-center cursor-pointer font-medium'
    >
      <BiFile className='text-base' /> Baixar Curriculo
    </button>
  );
};

export default DownloadResume;
