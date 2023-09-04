import React, { ReactNode, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { DashboardSidebar } from '../components/sidebar/dashboard';
import { AvatarDropdown } from "../components/menu";
import { Bubble } from "../components/bubble";
import { FOOTER_LINKS } from "../constants";
import { selectCurrentUser } from "../store/reducers/user";

type Props = {
  children?: ReactNode,
  title?: string,
  action?: ReactElement
};

const Header: React.FC = () => {
  const { username = "Guest" } = useSelector(selectCurrentUser);

  return <header className="relative py-8 h-[104px]">
    <Bubble>
      {`Hey, ${username}! No updates for now, but have a fantastic day!`}
    </Bubble>
    <div className="absolute right-0 top-6" >
      <AvatarDropdown title={username} />
    </div>
  </header>
}

const Footer: React.FC = () => {
  return <footer className="flex flex-row justify-between items-center pt-9 pb-16 border-t border-slate-600 mt-auto -mx-4 px-4">
    <div className="flex flex-row gap-x-4">
      {
        FOOTER_LINKS.map(link => <a href={link.href} key={link.text} className="" target="_blank" rel="noreferrer">{link.text}</a>)
      }
    </div>
    <div className="font-semibold text-gray-500 text-base">
      <span className="text-gray-300 mr-1">© 2023</span> All rights reserved
    </div>
  </footer>
}

const DashboardLayout: React.FC<Props> = ({ children, title, action }) => {
  return (
    <div className="w-full flex flex-row bg-white pl-[244px]">
      <div className="flex-1 max-w-[244px] basis-[244px] h-screen p-8 flex flex-col bg-purple-50 fixed left-0 top-0">
        <DashboardSidebar />
      </div>
      <div className="flex-1 basis px-16 min-h-screen">
        <div className="max-w-[1068px] flex flex-col mx-auto">
          <Header />
          <div className="flex flex-row items-center justify-between pt-6 mb-12">
            <h1 className="inline-block font-poppins font-bold text-5xl	text-gray-500">{title}</h1>
            <div className="ml-auto">{action}</div>
          </div>
          <div className="mb-16">
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
