import Image from 'next/image';

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image
        src={imgSrc}
        layout='fill'
        objectFit='cover'
        className='rounded-xl'
        alt=''
      />
    </div>
  );
};

export default DevImg;
