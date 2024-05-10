const Home = () => {
  return (
    <div
      className="flex flex-col text-[#475a40]
     justify-between max-md:gap-24"
    >
      <div className="flex justify-between w-full px-6 py-3">
        <p>ITALIANA BOTXNICA</p>
        <p>@ITALIANA_BOTXNICA</p>
      </div>

      <div className="flex flex-col items-center justify-center px-4">
        <p className="text-7xl flex flex-col justify-center items-center text-center">
          <p className="relative">
            ITALIANA
            <span className="absolute -top-4 -right-16 text-md">®</span>
          </p>
          <p>BOTÁNICA</p>
          <div className="text-sm flex justify-between w-full pt-1">
            <p>HERBS</p>
            <p>SPICES</p>
            <p>ORGANIC</p>
          </div>
        </p>

        <p className="flex justify-center items-center text-center pt-3">
          EVERY PRODUCT IS CAREFIJLLY SOURCED AND CRAFTED TO ENSURE you
          EXPERIENCF THE FULL POTENTIAL OF NATURE REMEDIES
        </p>
        <p className="text-lg pt-5 font-bold">100% Nature</p>
      </div>

      <div className="flex flex-col justify-center  items-center py-2">
        <img
          className="h-12 w-12"
          src="https://images.vexels.com/media/users/3/132790/isolated/preview/09d42807a5b66e3eddedab28d640c1db-icono-de-globo-de-mapa-del-mundo.png"
        ></img>
        <p className="text-lg"> MASSA MARITTIMA</p>
      </div>
    </div>
  );
};

export default Home;
