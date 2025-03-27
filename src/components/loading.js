import Image from "next/image";

export const Load = () => {
    return (
      <>
        <div className=" h-auto w-auto m-auto flex justify-center items-center py-40">
          <Image
            src="/loading-logo.gif"
            width={64}
            height={64}
            alt="loading..."
          />
        </div>
      </>
    );
  };
  