import Image from 'next/image'
import { ImagePlaceholder } from '@/components/placeholders'

interface BooCoverProps {
    title: string;
    imgUrl: string;
}
const BooCover = ({ title, imgUrl }: Partial<BooCoverProps>) => {
    return imgUrl ? <Image src={imgUrl} alt={`Cover of ${title}`} width={200} height={300} /> : <ImagePlaceholder />
}

export default BooCover;