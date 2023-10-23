import { Divider } from "../Divider"
export const Footer = ({}) => {
    const SocialLinks = [
      {
        name: 'X',
        url: '',
      },
      {
        name: 'Tiktok',
        url: '',
      },
      {
        name: 'Instagram',
        url: '',
      },
      {
        name: 'Discord',
        url: '',
      },
      {
        name: 'Github',
        url: '',
      },
  
    ]
  
    
  
    const Features = [
      {
        name: 'Learn',
        url: '',
        status: 'Coming Soon',
      },
      {
        name: 'Jobs',
        url: '',
        status: 'Live',
      },
      {
        name: 'HawkShow',
        url: '',
        status: 'Coming Soon',
      },
      {
        name: 'Free Dev',
        url: '',
        status: 'Coming Soon',
      },
      {
        name: 'Dev Bio',
        url: '',
        status: 'Live',
      },
    ]
    return(
      <div className="w-[100%] mb-5  text-white mt-[40px] py-2 px-2 h-auto lg:h-[400px]" id="bg1">
        <div className="flex ">
        <div className="w-[74%] mb-5 h-auto  ml-auto mr-auto">
            <div className="ml-0 mr-auto">
              <div className="lg:text-lg  text-base font-extralight">
              This Interface is an open source software , a cross chain messaging protocol. THIS INTERFACE AND THE WHOLE OPEN BRIDGE ARE PROVIDED "AS IS", AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND. By using or accessing Open Bridge, you agree that no developer or entity involved in creating, deploying, maintaining, operating this Interface, or causing or supporting any of the foregoing, will be liable in any manner for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of, Open Bridge, or this interface themselves, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value. By using or accessing this Interface, you represent that you are not subject to sanctions or otherwise designated on any list of prohibited or restricted parties or excluded or denied persons, including but not limited to the lists maintained by the United States' Department of Treasury's Office of Foreign Assets Control, the United Nations Security Council, the European Union or its Member States, or any other government authority.
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
  