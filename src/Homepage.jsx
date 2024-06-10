import logo from "./assets/home-hero.webp";
import img1 from "./assets/img1.webp";
import img2 from "./assets/img2.webp";
import img3 from "./assets/img3.webp";
import img5 from "./assets/img5.webp";
import avatar from "./assets/avatars.webp";
import icon from "./assets/icons.webp";
import notion from "./assets/notion.webp";
import acme from "./assets/acme.webp";
import community from "./assets/community.png";
import EngineeringIcon from "@mui/icons-material/Engineering";
import DrawIcon from "@mui/icons-material/Draw";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import CampaignIcon from "@mui/icons-material/Campaign";
import Person2Icon from "@mui/icons-material/Person2";
import ExploreIcon from "@mui/icons-material/Explore";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SummarizeIcon from "@mui/icons-material/Summarize";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

function Homepage() {
  return (
    <div className="text-#050505 lg:ml-[250px] lg:mr-[250px] leading-4 text-lg bg-white">
      <div className="text-center mt-10 lg:mt-[80px]">
        <div className="pb-5">
          <h1 className="md:text-7xl sm:text-6xl font-bold text-4xl text-center">
            <i className="text-orange-600 not-italic">Write</i>, plan, share.
            <br></br>
            With AI at your side.
          </h1>
        </div>
        <div className="pb-8">
          <p className="md:text-xl  font-semibold text-sm">
            Notion is the connected workspace where better, faster work happens.
          </p>
        </div>
        <button className="text-white lg:text-lg md:text-lg text-sm text-center bg-orange-600 lg:px-5 lg:py-2 rounded p-2">
          Get Notion free
        </button>
      </div>
      <div className="flex justify-center">
        <img src={logo} className="w-10/12 mt-10 md:w-[500px]" />
      </div>

      <div className="flex lg:flex-nowrap mt-2 flex-wrap justify-center text-center items-center gap-2">
        <div className="bg-[#F2F2F2] flex-initial w-11/12 h-36 py-5 rounded-lg">
          <AutoAwesomeIcon color="secondary"></AutoAwesomeIcon>
          <h2 className="font-bold my-2">AI</h2>
          <br></br>
          <p className="font-medium text-sm">
            Ask literally Anything. Notion will Answer
          </p>
        </div>
        <div className="bg-[#F2F2F2] flex-initial w-11/12 h-36 py-5 rounded-lg">
          <AutoStoriesIcon sx={{ color: "orangered" }}></AutoStoriesIcon>
          <h2 className="font-bold my-2">Wikis</h2>
          <br></br>
          <p className="font-medium text-sm">
            centralize no more hunting for answers
          </p>
        </div>
        <div className="bg-[#F2F2F2] flex-initial w-11/12 h-36 py-5 rounded-lg">
          <CrisisAlertIcon color="primary"></CrisisAlertIcon>
          <h2 className="font-bold my-2">Projects</h2>
          <br></br>
          <p className="font-medium text-sm">
            Manage complex projects without chaos.
          </p>
        </div>
        <div className="bg-[#F2F2F2] flex-initial w-11/12 h-36 py-5 rounded-lg">
          <SummarizeIcon sx={{ color: "orange" }}></SummarizeIcon>
          <h2 className="font-bold my-2">Docs</h2>
          <br></br>
          <p className="font-medium text-sm">
            Simple,beautiful.Next-gen notes & docs
          </p>
        </div>
      </div>

      <div>
        <div className="text-center mt-50">
          <h1 className="text-3xl lg:text-6xl font-bold mt-20 mb-5">
            The wiki that redefines ‘wiki’
          </h1>
          <p className="text-base lg:text-lg m-2 mb-10">
            It’s hard to move fast if you’ve got a clunky and <br />
            disorganized workspace. Centralize all your knowledge in Notion
            instead.
          </p>

          <img
            src={acme}
            className="shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-11/12 h-1/6 m-5"
          />
        </div>
      </div>

      <div>
        <div className="text-center mt-32 mb-8">
          <h1 className="text-3xl lg:text-5xl font-bold mb-5">
            Consolidate tools.Cut costs.
          </h1>
          <p className="text-base lg:text-lg">
            We got rid of nearly a dozen different tools because of <br></br>
            what Notion does for us.
          </p>
        </div>
      </div>

      <div>
        <div className="bg-[#F2F2F2] flex items-center text-center rounded-lg m-2">
          <div>
            <h2 className="text-lg py-4 lg:text-lg font-bold">
              Visualize, filter & sort any way you want
            </h2>
            <p className="text-sm pb-2 lg:text-lg">
              Show only tasks assigned to you,
              <br /> or items marked as urgent.
            </p>

            <img src={img3} width={950} height={600} className="p-5 " />
          </div>
        </div>
      </div>

      <div>
        <div className="flex lg:flex-nowrap flex-wrap justify-center text-center items-center gap-2 my-5 m-2">
          <div className="bg-[#F2F2F2] p-5 rounded-lg">
            <div>
              <h1 className="text-lg lg:text-lg font-bold">
                Customize the info you track
              </h1>
              <p className="text-sm py-2 lg:text-base">
                Create your own labels, tags, owners, and more, so everyone
                context and everything stays organized.
              </p>
            </div>
            <img
              src={img1}
              width={600}
              height={400}
              style={{
                paddingTop: "20px",
              }}
            />
          </div>
          <div className="bg-[#F2F2F2] p-8 rounded-lg">
            <div>
              <h1 className="text-lg lg:text-lg font-bold">
                Build any page, communicate any idea
              </h1>
              <p className="text-sm py-2 lg:text-base">
                Everything is drag and drop in Notion — images, toggles,
                to-do’s, even embedded databases.
              </p>
            </div>
            <img
              src={img2}
              width={600}
              height={400}
              style={{
                paddingTop: "20px",
              }}
            />
          </div>
        </div>
      </div>

      <div>
        <div className="text-center mt-10 lg:mt-20">
          <h2 className="font-bold text-3xl lg:text-5xl my-10">
            Every team, side-by-side
          </h2>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap justify-between text-center">
          <div className="bg-[#F2F2F2] flex-none lg:w-36 sm:w-2/5 p-5 rounded-lg m-5">
            <EngineeringIcon fontSize="large"></EngineeringIcon>
            <h2 className="mt-2">Engineering</h2>
          </div>

          <div className="bg-[#F2F2F2] flex-1 lg:w-36 sm:w-2/5 p-5 rounded-lg m-5">
            <DrawIcon fontSize="large"></DrawIcon>
            <h2 className="mt-2">Design</h2>
          </div>

          <div className="bg-[#F2F2F2] flex-1 lg:w-36 sm:w-2/5 p-5 rounded-lg m-5">
            <RocketLaunchIcon fontSize="large"></RocketLaunchIcon>
            <h2 className="mt-2">Product</h2>
          </div>

          <div className="bg-[#F2F2F2] flex-1 lg:w-36 sm:w-2/5 p-5 rounded-lg m-5">
            <CampaignIcon fontSize="large"></CampaignIcon>
            <h2 className="mt-2">Marketing</h2>
          </div>

          <div className="bg-[#F2F2F2] flex-1 lg:w-36 sm:w-2/5 p-5 rounded-lg m-5">
            <ExploreIcon fontSize="large"></ExploreIcon>
            <h2 className="mt-2">Opeartion</h2>
          </div>

          <div className="bg-[#F2F2F2] flex-1 lg:w-36 sm:w-2/5 p-5 rounded-lg m-5">
            <Person2Icon fontSize="large"></Person2Icon>
            <h2 className="mt-2">Hr</h2>
          </div>
        </div>
      </div>

      <div>
        <div className="text-center">
          <h2 className="font-bold text-3xl lg:text-5xl mt-9 mb-4 capitalize">
            Join a global movement.Unleash your creativity.
          </h2>
          <p className="text-base">
            Our vibrant community produces content, teaches courses, and leads
            events all <br />
            over the world.
          </p>
          <img className="my-10 w-full" src={avatar} />
        </div>

        <div className="flex flex-wrap justify-between gap-5 text-center my-10">
          <div className="bg-[#F2F2F2] flex-1 rounded-lg mx-5 pb-2">
            <div>
              <h2 className="font-bold text-5xl my-4 text-blue-600">1M+</h2>
              <p className="text-base">Community Members</p>
            </div>
          </div>

          <div className="bg-[#F2F2F2] flex-1 rounded-lg mx-5 pb-2">
            <div>
              <h2 className="font-bold text-5xl my-4 text-blue-600">150+</h2>
              <p className="text-base">Community Groups</p>
            </div>
          </div>

          <div className="bg-[#F2F2F2] flex-1 rounded-lg mx-5 pb-2">
            <div>
              <h2 className="font-bold text-5xl my-4 text-blue-600">50+</h2>
              <p className="text-base">Companies Represented</p>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-nowrap flex-wrap justify-center text-center items-center gap-2 my-5 m-2">
          <div className="bg-[#F2F2F2] p-4 m-2 rounded-lg">
            <div>
              <h1 className="lg:text-lg text-base font-bold">
                An always-on support network
              </h1>
              <p className="text-sm lg:text-base">
                Swap setups and share tips in over 149 online communities.
              </p>
            </div>
            <img className="py-10 w-12/12" src={icon} />
          </div>
          <div className="bg-[#F2F2F2] p-4 m-2 rounded-lg">
            <div>
              <h1 className="lg:text-lg text-base font-bold">
                Choose your language
              </h1>
              <p className="text-sm lg:text-base">
                Notion currently supports English,
                <br /> Korean, Japanese, French, German, Spanish, and <br />
                Portuguese. With more to come!
              </p>
            </div>
            <img className="py-5 w-12/12" src={notion} />
          </div>
        </div>

        <div className="flex text-center justify-around">
          <div>
            <div className="px-10 items-center mt-10">
              <div>
                <img
                  className="rounded-lg sm:w-full w-12/12 "
                  src={community}
                />
                <h3 className="text-base lg:text-lg m-2">
                  Community meet-up in Tokyo
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-center mt-10 mb-8">
            <h1 className="text-2xl lg:text-5xl font-bold mb-2">
              Get started for free
            </h1>
            <p className="text-sm lg:text-lg">
              Play around with it first. Pay and add your team later.
            </p>
            <button className="text-white lg:text-lg md:text-lg text-sm text-center bg-black mt-4 lg:px-5 lg:py-2 rounded p-2">
              Get Notion free
            </button>
          </div>
        </div>

        <div>
          <div className="flex flex-wrap justify-center">
            <div>
              <img src={img5} className="p-5" />
            </div>
            <div>
              <p className="text-base font-bold text-gray-500  lg:text-lg">
                :)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Homepage;
