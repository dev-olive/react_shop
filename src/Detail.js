import React, {useEffect, useState} from 'react';
import { useHistory,useParams } from 'react-router';
import styled from 'styled-components';
import './Detail.scss'

let Box = styled.div`
    padding: 20px;
`;
let Title = styled.h4`
    font-size: 25px;
    color : ${props => props.color}
`;
function Detail(props){
    let history = useHistory();
    let { id } = useParams();
    let [alert, alertChange] = useState(true);
    let [tmp, tmpChange] = useState('');
    let selectedGood = props.goods.filter(ele=>{
        return ele.id == id})[0];

    useEffect(()=>{
        let timer = setTimeout(()=>{
            alertChange(false);
        }, 2000)
        return ()=>{ clearTimeout(timer) };
    },[alert])
    
    return(
      <div className="container">
          <Box><Title className="red">Detail</Title></Box>
          <input onChange={(e)=>{tmpChange(e.target.value)}}/>
          {tmp}
          {
            alert 
            ? <div className="my-alert">재고가 얼마 남지 않았습니다.</div>
            : null
          }
          <div className="row">
            <div className="col-md-6">
              <img src={selectedGood.src} width="100%" />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">{selectedGood.title}</h4>
              <p>{selectedGood.content}</p>
              <p>{selectedGood.price}원</p>
              <button className="btn btn-danger">주문하기</button> 
              <hr />
              <button className="btn btn-danger" onClick={()=>{
                  history.goBack();
                  }}>뒤로가기</button> 
            </div>
          </div>
        </div> 
    )
  }
  export default Detail;