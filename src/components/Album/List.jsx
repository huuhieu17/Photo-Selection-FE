import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getMyAlbum } from '../../api/api';
import { useAuth } from '../../contexts/authenticateContext';
import dayjs from 'dayjs';
import Pagination from '../Pagination/Pagination';
import { NavLink, useNavigate } from 'react-router-dom';

const List = () => {
  const {user} = useAuth();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPage, setTotalPage] = useState(0);
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    try{
      const res = await getMyAlbum(currentPage, pageSize);
      const responseData = res.data
      setData(responseData.data)
      const pagination = responseData.pagination
      setTotalPage(Math.ceil(pagination.totalItems / pageSize))
    } catch (e) {
      toast.error('Có lỗi xảy ra')
    }
  }, [currentPage, pageSize])

  useEffect(() => {
    getData()
  }, [getData])
  return (
    <div>
      {user ? (
        <div>
          <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="flex justify-between items-center">
              <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
                Danh sách album
              </h4>
              <NavLink to={'/create-album'}>
                <button className='cursor-pointer border rounded px-4 py-2 bg-gray-400 font-bold text-white'>Tạo album</button>
              </NavLink>
            </div>

            <div className="flex flex-col">
              <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4">
                <div className="p-2.5 xl:p-5">
                  <h5 className="text-sm font-medium uppercase xsm:text-base">
                    Tên
                  </h5>
                </div>
                <div className="p-2.5 text-center xl:p-5">
                  <h5 className="text-sm font-medium uppercase xsm:text-base">
                    Folder Id
                  </h5>
                </div>
                <div className="p-2.5 text-center xl:p-5">
                  <h5 className="text-sm font-medium uppercase xsm:text-base">
                    Ngày tạo
                  </h5>
                </div>
              </div>

              {data.map((brand, key) => (
                <div
                  onClick={() => {
                    navigate(`/albums/${brand._id}`);
                  }}
                  className={`grid grid-cols-3 cursor-pointer ${
                    key === data.length - 1
                      ? ''
                      : 'border-b border-stroke dark:border-strokedark'
                  }`}
                  key={key}
                >
                  <div className="flex items-center gap-3 p-2.5 xl:p-5">
                    <p className="hidden text-black dark:text-white sm:block">
                      {brand.name}
                    </p>
                  </div>

                  <div className="flex items-center justify-center p-2.5 xl:p-5">
                    <p className="text-black dark:text-white">
                      {brand.folderId}
                    </p>
                  </div>

                  <div className="flex items-center justify-center p-2.5 xl:p-5">
                    <p className="text-meta-3">
                      {dayjs(brand.createdAt).format('DD-MM-YYYY hh:mm:ss')}
                    </p>
                  </div>
                </div>
              ))}

              <Pagination
                currentPage={currentPage}
                totalPages={totalPage}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>Vui lòng đăng nhập để tiếp tục</div>
      )}
    </div>
  );
}

export default List