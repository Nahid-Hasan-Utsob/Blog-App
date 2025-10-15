
import Bookmark from '../Bookmark/Bookmark';

export default function Bookmarks({bookmarkData}) {


  
  // console.log(title);
  
  return (
    <section className='w-[40%] ml-8 '>
      <div>
        <p className='text-[#6047EC] text-2xl font-bold py-5 border px-12 rounded-lg'  >Spent time on read : 177 min</p>
      </div>
      <div>
      <button className={`text-2xl   font-bold h-24 flex items-center`}>Bookmarked Blogs : {bookmarkData.length}</button>
      </div>
    {
      bookmarkData.map(bookmarkData => <Bookmark bookmarkData ={bookmarkData}></Bookmark>)
    }
      
    </section>
  )
}
