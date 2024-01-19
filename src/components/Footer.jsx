import { Icon } from "../components";
import { FOOTER_LINKS } from "../constants";

const Footer = () => {
  return (
    <div className="footer gap-2 laptop:gap-0 laptop:footer-laptop">
      <div className="flex">
        {FOOTER_LINKS.map((footerItem, index) => (
          <a
            key={index}
            href={footerItem.href}
            target="_blank"
            rel="noopener noreferrer"
            download={footerItem.download}
            className="group flex flex-col justify-center items-center uppercase text-xs laptop:border-r-2 border-russian-blue cursor-pointer px-2 laptop:px-6 last:border-none"
          >
            <Icon
              name={footerItem.iconName}
              className="w-9 laptop:w-6 self-end laptop:self-center group-hover:[filter:drop-shadow(3px_5px_2px_rgb(154_174_187/_0.4))]"
            ></Icon>
            <h1 className="hidden laptop:flex ">{footerItem.title}</h1>
          </a>
        ))}
      </div>
      <div className="laptop:h-0 flex text-[10px] items-center laptop:ml-auto laptop:pr-3 gap-[2px]">
        <p> Michal Gordon </p>
        <Icon name="copyright" className={"w-4"}></Icon> <p> 2023</p>
      </div>
    </div>
  );
};

export default Footer;
