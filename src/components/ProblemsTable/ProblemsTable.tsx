import { problems } from '@/mockProblems/problems';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';
import YouTube from 'react-youtube';

type ProblemsTableProps = {};

const ProblemsTable: React.FC<ProblemsTableProps> = () => {
  const [youtubePlayer, setYoutubePlayer] = useState({
    isOpen: false,
    videoId: '',
  });

  const closeModal = () => {
    setYoutubePlayer({
      isOpen: false,
      videoId: '',
    });
  };
  return (
    <>
      <tbody className="text-white">
        {problems.map((doc, idx) => {
          const difficultyColor =
            doc.difficulty === 'Easy'
              ? 'text-dark-green-s'
              : doc.difficulty === 'Medium'
              ? 'text-yellow-500'
              : 'text-dark-pink';
          return (
            <tr
              className={`${idx % 2 !== 0 ? 'bg-dark-layer-1' : ''}`}
              key={idx}
            >
              <th className="px-2 py-4 font-medium whitespace-nowrap text-dark-green-s">
                <BsCheckCircle fontSize={'18'} width={'18'} />
              </th>
              <td className="px-6 py-4">
                <Link
                  href={`/problems/${doc.id}`}
                  className="hover:text-blue-600 cursor-pointer"
                >
                  {doc.title}
                </Link>
              </td>
              <td className={`px-6 py-4 ${difficultyColor}`}>
                {doc.difficulty}
              </td>
              <td className={`px-6 py-4`}>{doc.category}</td>
              <td className={`px-6 py-4`}>
                {doc.videoId ? (
                  <AiFillYoutube
                    className="cursor-pointer hover:text-red-600"
                    fontSize={'28'}
                    onClick={() =>
                      setYoutubePlayer({
                        isOpen: true,
                        videoId: doc.videoId as string,
                      })
                    }
                  />
                ) : (
                  <p className="text-gray-400">Coming Soon</p>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
      {youtubePlayer.isOpen && (
        <tfoot className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center">
          <div className="bg-black z-10 opacity-70 top-0 left-0 absolute"></div>
          <div className="w-full z-50 h-full px-6 relative max-w-4xl">
            <div className="h-full w-full flex items-center justify-center relative">
              <div className="relative w-full">
                <IoClose
                  fontSize={'35'}
                  className="cursor-pointer absolute -top-16 right-0"
                  onClick={closeModal}
                />
                <YouTube
                  videoId={youtubePlayer.videoId}
                  loading="lazy"
                  iframeClassName="w-full min-h-[500px]"
                />
              </div>
            </div>
          </div>
        </tfoot>
      )}
    </>
  );
};
export default ProblemsTable;
