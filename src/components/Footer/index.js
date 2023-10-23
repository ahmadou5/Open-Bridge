import { Divider } from "../Divider"
export const Footer = ({}) => {

    return(
      <div className="w-[100%] mb-5  text-white mt-[40px] py-2 px-2 h-auto lg:h-[400px]" id="bg1">
        <div className="flex ">
        <div className="w-[74%] mb-5 h-auto  ml-auto mr-auto">
            <div className="ml-0 mr-auto">
              <div className="lg:text-lg  text-base font-extralight">
              Open Bridge presents an open-source software solution, functioning as a cross-chain messaging protocol. OPEN BRIDGE, ALONG WITH THE ENTIRE OPEN BRIDGE PLATFORM, IS PROVIDED ON AN "AS IS" BASIS, AT YOUR OWN RISK, AND WITHOUT ANY WARRANTIES OF ANY KIND. By utilizing or accessing Open Bridge, you acknowledge that neither the developers nor any entities involved in the creation, deployment, maintenance, or operation of Open Bridge, or those responsible for facilitating or supporting these activities, will be held accountable in any way for any claims or damages associated with your use, inability to use, or interactions with other Open Bridge users, or Open Bridge itself. This encompasses, but is not limited to, direct, indirect, incidental, special, exemplary, punitive, or consequential damages, as well as the loss of profits, cryptocurrencies, tokens, or any other valuable assets. Upon using or accessing Open Bridge, you also affirm that you are not subject to sanctions or listed as a prohibited or restricted party, excluded or denied person on any such list maintained by authorities, including but not limited to the United States Department of the Treasury Office of Foreign Assets Control, the United Nations Security Council, the European Union or its Member States, or any other governmental agency.
              </div>
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
  