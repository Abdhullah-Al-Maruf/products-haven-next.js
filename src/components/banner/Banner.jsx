import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-linear-to-t from-[#9538E2] to-[#9538E1] h-[75vh] mx-5 rounded-md ">
      <div className="space-y-5 p-10 relative">
        <h1 className="font-bold text-white text-3xl text-center">
          Upgrade Your  Accessorize with <br /> product Heaven Accessories
        </h1>
        <p className="text-white text-center">
          Explore the latest products that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <div className="bg-white rounded-full w-25 flex items-center justify-center mt-5 mx-auto ">
            
        <button className=" font-semibold bg-linear-to-b from-purple-400 to-purple-700 bg-clip-text text-transparent  p-2 ">
  Shop Now
</button>
        </div>
      </div>
      
   <div className="absolute left-1/2 transform -translate-x-1/2 p-[2px] rounded-xl bg-gradient-to-r from-white/30 to-white/10 backdrop-blur-lg">
  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 ">
    <Image
      src="/vrheadset.png"
      alt="vr headset"
      width={800}
      height={400}
      className="rounded-lg"
    />
  </div>
</div>
    </div>
  );
};

export default Banner;
