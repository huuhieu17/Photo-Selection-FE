import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useParams } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';

const { useState, useEffect } = require('react');
const { getPhotoAlbum, getAlbum } = require('../../api/api');
function ViewAlbum() {
  const params = useParams();
  
  const {albumId} = params
  const [album, setAlbum] = useState();
  const [photos, setPhotos] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

  const toggleSelectImage = (name) => {
    setSelectedImages((prev) =>
      prev.includes(name) ? prev.filter((imgId) => imgId !== name) : [...prev, name]
    );
  };

  useEffect(() => {
    getAlbum(albumId).then(res => {
        setAlbum(res.data)
    })
  }, [albumId]);

  useEffect(() => {
    if(album){
        getPhotoAlbum(album.folderId)
      .then((response) => setPhotos(response.data))
      .catch((error) => console.error(error));
    }
  }, [album])

  if(!album) return null;
  return (
    <div className="lg:flex h-screen p-4 bg-gray-100">
      {/* Image List */}
      <div className="lg:w-2/3 w-full p-4 bg-white shadow rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Chọn hình ảnh</h2>
        <PhotoProvider>
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-4">
            {photos.map((image, index) => (
              <div
                key={image.id}
                className={`border p-2 rounded cursor-pointer transition ${
                  selectedImages.includes(image.name)
                    ? 'border-blue-500'
                    : 'border-gray-300'
                }`}
              >
                <PhotoView
                  key={index}
                  src={`https://lh3.googleusercontent.com/d/${image.id}`}
                >
                  <img
                    className='aspect-video'
                    src={`https://lh3.googleusercontent.com/d/${image.id}`}
                    alt={image.name}
                  />
                </PhotoView>
                {/* <img alt={image.name} className="w-full rounded" /> */}
                <p className="text-center mt-2 text-sm"   onClick={() => toggleSelectImage(image.name)}>{image.name}</p>
                <button className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded"   onClick={() => toggleSelectImage(image.name)}>
                  {selectedImages.includes(image.name) ? 'Bỏ Chọn' : 'Chọn'}
                </button>
              </div>
            ))}
          </div>
        </PhotoProvider>
      </div>

      {/* Album List */}
      <div className="lg:w-1/3 w-full mt-4 lg:mt-0 p-4 lg:ml-4 bg-white shadow rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Thông tin</h2>
        <ul>
          <li className="p-2 border-b text-gray-700">
            <b>Tên album: </b>
            {album.name}
          </li>
          <li className="p-2 border-b text-gray-700">
            <b>Ngày tạo: </b>
            {album.createdAt}
          </li>
          <div className='p-2'>
            <b>Danh sách đã chọn:</b><br/>
            <small>( Sao chép list và paste vào phần mềm )</small>
            <textarea rows={20} className='block w-full border mt-2 p-2'
                value={selectedImages.join(', ')}
            ></textarea>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default ViewAlbum;
