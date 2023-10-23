import { Divider } from "../Divider"
export const Footer = ({}) => {

    return(
      <div className="w-[100%] mb-5  text-white mt-[40px] py-2 px-2 h-auto lg:h-[400px]" id="bg1">
        <div className="flex ">
        <div className="w-[74%] mb-5 h-auto  ml-auto mr-auto">
            <div className="ml-0 mr-auto">
              
            </div>
        </div>
        </div>
        <Divider />
        <div>
        <div className=" font-semibold">
                <p className="w-[87%] mt-4 ml-auto ">
                  © {new Date().getFullYear()} Open Bridge
                </p>
        </div>
        </div>
      </div>
    )
  }
  