import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createAlbum, getListMyDriveFolder } from "../../api/api";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";

function CreateAlbum() {
  const navigate = useNavigate();

  const [folders, setFolders] = useState([]);
  const [searchedFolder, setSearchedFolder] = useState([]);
  const [albumName, setAlbumName] = useState('');
  const [selectedFolder, setSelectedFolder] = useState('');

  useEffect(() => {
    getListMyDriveFolder()
      .then((response) => {
        setFolders(response.data);
        setSearchedFolder(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleCreateAlbum = async () => {
    if (albumName === '') {
      toast.error('Vui lòng điền tên album');
      return;
    }
    if (!selectedFolder === '') {
      toast.error('Vui lòng chọn thư mục');
      return;
    }
    const res = await createAlbum(selectedFolder.id, albumName);
    if (res.data) {
      toast.success('Tạo album thành công');
      navigate('/');
    }
  };

  return (
    <div>
      <Breadcrumb pageName={'Thêm album'} />
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <form>
          <div className="w-full">
            <label className="mb-2.5 block text-black dark:text-white">
              Tên Album
            </label>
            <input
              type="text"
              placeholder="Nhập tên album của bạn"
              onChange={(e) => setAlbumName(e.target.value)}
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          <div className="w-full mt-5">
            <label className="mb-2.5 block text-black dark:text-white">
              Tìm folder <small className="text-red-500 font-bold">(*) Vui lòng đăng nhập google trước</small>
            </label>
            <input
              type="text"
              placeholder="Nhập tên folder"
              onChange={(e) => {
                setSearchedFolder(
                  folders.filter((item) => {
                    return item.name
                      .toLowerCase()
                      .includes(e.target.value.toLowerCase());
                  })
                );
              }}
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          <div className="flex justify-around flex-wrap mt-10 max-h-[40vh] overflow-y-auto">
            {searchedFolder.map((folder) => (
              <div
                className="mx-auto  w-full md:w-1/2 lg:w-1/4 px-3 pb-3"
                onClick={() => {
                  setSelectedFolder(folder);
                }}
              >
                <div
                  className={`flex items-center ${
                    selectedFolder && selectedFolder.id === folder.id
                      ? 'bg-indigo-500'
                      : 'dark:bg-black bg-gray-500'
                  } rounded-md p-3 text-white cursor-pointer transition duration-500 ease-in-out hover:shadow hover:bg-indigo-600`}
                >
                  <div>
                    <svg
                      fill="currentColor"
                      className="w-10 h-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M0 4c0-1.1.9-2 2-2h7l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z"></path>
                    </svg>
                  </div>
                  <div className="px-3 mr-auto">
                    <h4 className="font-bold">{folder.name}</h4>
                    <small className="text-xs">{folder.createdTime}</small>
                  </div>
                </div>
              </div>
              // <option key={folder.id} value={folder.id}>
              //   {folder.name}
              // </option>
            ))}
          </div>
          <button type="button" className="mt-10 border rounded px-4 py-2" onClick={handleCreateAlbum}>
            Tạo Album
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAlbum;
