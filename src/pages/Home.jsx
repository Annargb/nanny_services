import { Link } from 'react-router-dom';
import icons from '/assets/icons.svg';

const Home = () => {
  return (
    <div className="container flex  w-1376px rounded-30px">
      <div className="w-677px h-736px  pr-64px pl-96px pt-251px bg-green rounded-l-30px">
        <h1 className="text-white text-4xl font-medium leading-none tracking-tightest mb-28px">
          Make Life Easier for the Family:
        </h1>
        <p className="text-white text-2xl font-normal leading-107 tracking-tighter mb-64px">
          Find Babysitters Online for All Occasions
        </p>
        <Link
          to="/nannies"
          className="flex gap-4 w-[230px] items-baseline border border-borderColor rounded-30px py-18px px-50px "
        >
          <span className="text-base font-medium tracking-tight leading-120 text-white">
            Get started
          </span>
          <svg className="w-[15px] h-[17px]">
            <use href={`${icons}#arrow`} />
          </svg>
        </Link>
      </div>
      <div className="relative bg-hero bg-cover w-699px h-736px rounded-r-30px">
        <div className="absolute bottom-50px right-50px w-[284px] h-[118px] rounded-20px bg-white p-32px">
          <div className="flex gap-4">
            <div className="flex justify-center items-center w-54px h-54px rounded-13px bg-green">
              <svg className="w-20px h-16px">
                <use href={`${icons}#check`} />
              </svg>
            </div>
            <div>
              <p className="text-sm font-normal text-gray">
                Experienced nannies
              </p>
              <p className="text-xl font-bold text-black">15,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
