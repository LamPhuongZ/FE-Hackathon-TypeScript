import Link from 'antd/es/typography/Link'
import React from 'react'
import arrowRight from "../../../../assets/icons/icon-arrow-right.svg";
import building from "../../../../assets/icons/building-solid 1.svg";

import { Pagination, Col, Divider, Row } from 'antd';


interface ListJob {
    id: number,
    category: string,
    SL: number
}

const ListJob:ListJob[] = [{id:1, category:'Xây dựng', SL:300},
    {id:2, category:'Kinh doanh', SL:200},
    {id:3, category:'Du lịch', SL:150},
    {id:4, category:'Thiết kế', SL:100},
    {id:5, category:'Làm đẹp', SL:50},
    {id:6, category:'Thời trang', SL:25},
    {id:7, category:'Sức khỏe', SL:10},
    {id:8, category:'Thể thao', SL:5},
    {id:9, category:'Người tìm việc', SL:2},
    {id:10, category:'Tư vấn', SL:1}
 
]

 const Category = () => {
  return (
    <>
    <section>
        <div className="find-job-top flex flex-row justify-between items-center">
        <h1 className="text-2xl font-bold border-b-4 border-custom-blue border-solid pb-1">Danh mục ngành nghề</h1>
        <Link  className="flex justify-center gap-4 text-blue-500 hover:underline">
          Xem Thêm 
          <img src={arrowRight} alt="icon-arrow-right" />
        </Link>
      </div>

    <Row 
    
    gutter={[24, 16]}>
        {ListJob.map((item)=>{
           return( <Col  key={item.id} className=" bg-blue-300" span={6}>
                <div className='flex flex-col gap-5 justify-center items-center'>
                    <div >
                        <img src={building} alt={building} />
                    </div>
                    <p>{item.category}</p>
                    <p>{item.SL}</p>
                </div>
            </Col>)
        })}
      
    </Row>

    <Pagination  align="center" defaultCurrent={1} total={50} />
    </section>
    


    </>
  )
}
export default Category