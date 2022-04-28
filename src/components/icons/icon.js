import React from "react"
import * as Icons from "@icons"

const Icon = ({ icon }) => {
  switch (icon) {
    case "mail":
      return <Icons.MailIcon />
    case "linkedin":
      return <Icons.LinkedInIcon />
    case "github":
      return <Icons.GithubIcon />
    case "external-link":
      return <Icons.ExternalLinkIcon />
    case "code":
      return <Icons.CodeIcon />
    case "film":
      return <Icons.FilmIcon />
    case "gear":
      return <Icons.GearIcon />
    case "joystick":
      return <Icons.JoystickIcon />
    case "keyboard":
      return <Icons.KeyboardIcon />
    case "laugh":
      return <Icons.LaughIcon />
    case "mouse":
      return <Icons.MouseIcon />
    case "watch":
      return <Icons.WatchIcon />
    case "pizza":
      return <Icons.PizzaIcon />
    case "hardware":
      return <Icons.HardwareIcon />
    case "icecream":
      return <Icons.IcecreamIcon />
    case "headset":
      return <Icons.HeadsetIcon />
    case "school":
      return <Icons.SchoolIcon />
    case "terminal":
      return <Icons.TerminalIcon />
    case "restaurant":
      return <Icons.RestaurantIcon />
    case "leaf":
      return <Icons.LeafIcon />
    case "glasses":
      return <Icons.GlassesIcon />
    case "earth":
      return <Icons.EarthIcon />
    case "desktop":
      return <Icons.DesktopIcon />
    case "snow":
      return <Icons.SnowIcon />
    case "barbell":
      return <Icons.BarbellIcon />
    case "cafe":
      return <Icons.CafeIcon />
    case "airplane":
      return <Icons.AirplaneIcon />
    case "music":
      return <Icons.MusicIcon />
    case "eye":
      return <Icons.EyeIcon />
    case "barchart":
      return <Icons.BarchartIcon />
    case "sun":
      return <Icons.SunIcon />
    case "door":
      return <Icons.DoorIcon />
    case "image":
      return <Icons.ImageIcon />
    case "flashlight":
      return <Icons.FlashLightIcon />
    default:
      return <svg></svg>
  }
}

export default Icon
