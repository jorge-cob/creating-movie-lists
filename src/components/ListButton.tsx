import {Button} from "@nextui-org/react"

type ColorProps = "default" | "primary" | "secondary" | "success" | "warning" | "danger" | undefined;
type ButtonProps = {
  onPress: () => void,
  withBorder?: boolean,
  children: React.ReactNode,
  position?: String,
  color?: ColorProps
}

const ListButton = ({ children, onPress, withBorder, position, color }: ButtonProps) => {
  return (
    <Button 
      className={`${position} rounded-md border-black ${withBorder ? 'border-1' : 'border-none'} z-50`} 
      variant="bordered" 
      onPress={onPress}
      color={color}
    >
      {children}
    </Button>
  )
}

export default ListButton