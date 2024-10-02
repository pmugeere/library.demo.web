import Image from 'next/image'
import { ImagePlaceholder } from '@/components/placeholders'

export default function Books() {
    return (
        <div>
            <div className="book-list grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-10">
                <BookCard id='1' title='The Great Gatsby' author='F. Scott Fitzgerald' format='Paperback' language='English' price={10} imgUrl='' />
                <BookCard id='1' title='Design Patterns' author='Eric Evans' format='Hardcover' language='English' price={10} imgUrl='' />
                <BookCard id='1' title='Clean Code' author='F. Scott Fitzgerald' format='Hardcover' language='English' price={10} imgUrl='' />
                <BookCard id='1' title='God i Norsk' author='F. Scott Fitzgerald' format='Paperback' language='English' price={10} imgUrl='' />
            </div>
        </div>
    )
}

interface BookCardProps {
    id: string;
    title: string;
    author: string;
    format: "Paperback" | "Hardcover" | "E-book" | "Audiobook";
    language: string;
    price: number;
    imgUrl: string;
}
const BookCard = ({ id, title, author, format, language, price, imgUrl }: Partial<BookCardProps>) => {
    return (
        <div className='book-item bg-slate-50 w-full h-full px-3 py-3 grid grid-cols-1 gap-y-5 justify-items-center rounded-md'>
            <BooCover title={title} imgUrl={imgUrl} />
            <div className="details">
                <h3>{title}</h3>
                <p>{author}</p>
                <p>{format} | {language}</p>
                <p>{price},-</p>
            </div>
        </div>
    );
}

interface BooCoverProps {
    title: string;
    imgUrl: string;
}
const BooCover = ({title, imgUrl }: Partial<BooCoverProps>) => {
    return imgUrl ? <Image src={imgUrl} alt={`Cover of ${title}`} width={200} height={300} /> : <ImagePlaceholder />
}