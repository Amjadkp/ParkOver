// import { ButtonProps, TouchableOpacity} from "react-native";

// const getBgVariantStyle =(vaiant:ButtonProps['bgvariant'])=>{
//     switch(variant){
//         case "secondary":
//             return "bg-gray-500 ";
//     }
// }

// const CustomButton =({
//     onPress,
//     title,
//     bgVariant='primary',
//     textVariant="default",
//     IconLeft,
//     IconRight,
//     className,
//     ...props
//  }) =><TouchableOpacity onPress={onPress} className={`w-full rounded-full flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${getBgVariantStyle (bgVarient)} ${className}`}> 
//         {IconLeft && <IconLeft/>}
//         <Text> {title}<Text/>
//         {IconRight && <IconRight/>}
//     </TouchableOpacity>;



// export default CustomButton;