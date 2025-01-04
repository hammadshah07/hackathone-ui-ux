import Another_section from "../app/hero_Section/another_section";
import AsgaardSofa from "../app/hero_Section/Asgaard";
import Blogs from "../app/hero_Section/blogs";
import Instagram from "../app/hero_Section/instagram";
import Home from "../app/hero_Section/sofa";
import Tabel from "../app/hero_Section/tabel";

export default function Hero() {
  return(
    <div>
      <Home/>
      <Tabel/>
      <Another_section/>
      <AsgaardSofa/>
      <Blogs/>
      <Instagram/>
    </div>
  )
}