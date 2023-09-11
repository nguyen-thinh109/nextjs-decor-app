import { HeaderData } from "@/src/interfaces";

export default function Header(data: HeaderData) {
  return <div className="w-full px-10 py-6 flex items-center justify-center">{data.activeTab}</div>;
}
