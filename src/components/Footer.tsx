import SocialMediaIcons from "./SocialMediaIcons"

const Footer = () => {
  return (
    <footer className="h-64 pt-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-playfair font-semibold text-2xl text-yellow">PARK YEBIN</p>
          <p className="font-playfair text-md text-yellow">©2023 YEBIN. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer