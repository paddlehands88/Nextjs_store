import Link from "next/link"
// import { Button } from "../ui/button"
import { PiStorefrontDuotone } from "react-icons/pi";

const Logo = () => {
  return (
    // <Button asChild>
      <>
      <Link href="/">
      <PiStorefrontDuotone className="w-10 h-10"/>
      </Link>

    {/* </Button> */}
    </>
  )
}

export default Logo