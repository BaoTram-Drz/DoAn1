import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


const BigText = styled.div`
  margin: 7% auto auto auto;
  text-align: center;
  font-family: 'Bungee Inline';
  font-weight: 400;
  font-size: 3rem;
  color: #f47068;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  @media (max-width: 800px) {
    margin: 15% auto auto auto;
  }
  @media (max-width: 1200px) {
    margin-top: 10%;
    font-size: 2.5rem;
  }
  @media (max-width: 912px) {
    margin-top: 10%;
    font-size: 2.5rem;
  }
  @media (max-width: 768px) {
    margin-top: 10%;
    font-size: 2.5rem;
  }
  @media (max-width: 540px) {
    margin-top: 15%;
    font-size: 2.5rem;
  }
  @media (max-width: 480px) {
    margin-top: 20%;
    font-size: 2rem;
  }
  @media (max-width: 300px) {
    margin-top: 30%;
    font-size: 1.5rem;
  }
`;

const Container = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin: 2%  0% 5% auto;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-gap: 2%;
    margin: 5% auto 10% auto;
  }
`;

const TableWrapper = styled.table`
  width: 100%;
  text-align: center;
`;

const TableHeader = styled.div`
    padding: 12px 24px;
    font: normal 400 2rem 'Autour One';
    color: #FFC24B;
    border-bottom: 3px dashed #FFB3AE;
    border-radius: 20px;
    @media (max-width: 1000px) {
      font-size: 2.5rem;
    }
    @media (max-width: 912px) {
      font-size: 2.3rem;
    }
    @media (max-width: 540px) {
      font-size: 1.5rem;
    }
    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
    @media (max-width: 300px) {
      font-size: 1.1rem;
    }
`;

const TableRow = styled.tr`
  background-color: white;
`;

const TableCellId = styled.div`
    width: 80%;
    float: right;
    font: normal 400 28px/1.5 'Roboto';
    color: #FFC24B;
    border: 2px dashed #FFB3AE;
    border-radius: 50%;    
`;

const TableCell = styled.td`
    padding: 12px 24px 12px 40px;
    font: normal 400 28px 'Roboto';
    color: #0E606B;
    text-align: left;
    @media (max-width: 1000px) {
      font-size: 2.3rem;
    }
    @media (max-width: 912px) {
      font-size: 2rem;
    }
    @media (max-width: 540px) {
      font-size: 1.5rem;
    }
    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
    @media (max-width: 300px) {
      font-size: 1rem;
    }
`;
const RightDiv = styled.div`
    width: 100%;
`;
const DivWrapper = styled.div`
    margin: auto auto 5% auto;
    width: 80%;
    height: 535px;
    text-align: center;
    background-image: linear-gradient(#0E606B, #1697A6);
    border: 3px solid #FFFFFF;
    border-radius: 20px;
    box-shadow: 0 0 2px gray;
    @media (max-width: 800px) {
      width: 100%;
    }
`;

const DivWrapper2 = styled.div`
    margin: 5%;
    width: 90%;
    height: 372px;
    background-image: url(${props => props.imageUrl});
    background-size: cover;
    background-position: center;
    border: 3px dashed #1697A6;
    border-radius: 30px;
    text-align: center;
    box-shadow: inset 200px 200px 200px rgba(0, 0, 0, 0.2); /* Hiệu ứng box-shadow ngược vào bên trong */
`;
const DivWrapper2Text = styled.p`
    font-family: 'Autour One';
    font-style: normal;
    font-weight: 400;
    font-size: 3.5rem;
    line-height: 200px;
    color: #FFC24B;
    text-shadow:
    -3px -3px 0 #fff, /* Viền trắng bên trái trên */
     3px -3px 0 #fff, /* Viền trắng bên phải trên */
    -3px  3px 0 #fff, /* Viền trắng bên trái dưới */
     3px  3px 0 #fff;
    text-align: center;
`;
const Button = styled(Link)`
    width: 60%;
    min-width: 200px;
    margin: auto;
    padding: 5px 24px;
    text-decoration: none;
    font: normal 400 2rem "Autour One";
    color: #ffc24b;
    background-color: white;
    border: 3px dashed #1697A6;
    border-radius: 20px;

    @media (max-width: 912px) {
      font-size: 1.8rem;
    }
    @media (max-width: 540px) {
      font-size: 1.5rem;
    }
    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
    @media (max-width: 300px) {
      font-size: 1.1rem;
    }
`;

const ButtonL = styled.button`
  margin: auto 10%;
  width: 80%;
  min-width: 300px;
  padding: 5px 24px;
  background-color: white;
  border: 3px solid #f47068;
  border-radius: 20px;
  @media (max-width: 800px) {
    margin: auto;
  }
  @media (max-width: 480px) {
    width:100%;
  }

`;
const LinkText = styled(Link)`
  font: normal 400 2rem "Autour One";
  color: #ffc24b;
  text-decoration: none;
  @media (max-width: 800px) {
    margin: auto;
  }

  @media (max-width: 912px) {
    font-size: 1.8rem;
  }
  @media (max-width: 540px) {
    font-size: 1.5rem;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
  @media (max-width: 300px) {
    font-size: 1.1rem;
  }
`;

const CoursesInfo = () => {
  const location = useLocation();
  const [productName, setProductName] = useState('Product A');
  const [productImage, setProductImage] = useState(null);

  const [data, setData] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (location.state && location.state.productname) {
      setProductName(location.state.productname);
    }
    if (location.state && location.state.image) {
      setProductImage(location.state.image);
    }
  }, [location.state]);

  useEffect(() => {
    fetchDataFromDatabase()
      .then((response) => setData(response))
      .catch((error) => console.error(error));
  }, [productName]);

  console.log("prod", location.state);
  console.log("prodN", productName);

  // Hàm lấy dữ liệu từ cơ sở dữ liệu (giả sử là API)
  const fetchDataFromDatabase = () => {
    return new Promise((resolve, reject) => {
      // Gọi API hoặc truy vấn cơ sở dữ liệu để lấy dữ liệu
      // Giả sử dữ liệu trả về là một mảng các đối tượng
      const data = {
        "Product A": [
          { id: 1, name: "Học từ vựng" },
          { id: 2, name: "Làm bài tập về từ vựng" },
          { id: 3, name: "Big Test" }

        ],
        "ASTRONOMY": [
          { id: 1, name: "Học từ vựng" },
          { id: 2, name: "Làm bài tập về từ vựng" },
          { id: 3, name: "Big Test" }
        ],
        "FRUITS": [
          { id: 1, name: "Học từ vựng" },
          { id: 2, name: "Làm bài tập về từ vựng" },
          { id: 3, name: "Big Test" }

        ],
        "CAREER": [
          { id: 1, name: "Học từ vựng" },
          { id: 2, name: "Làm bài tập về từ vựng" },
          { id: 3, name: "Big Test" }

        ],
        "ASTRONOMY": [
          { id: 1, name: "Học từ vựng" },
          { id: 2, name: "Làm bài tập về từ vựng" },
          { id: 3, name: "Big Test" }

        ],
        "VEGETABLE": [
          { id: 1, name: "Học từ vựng" },
          { id: 2, name: "Làm bài tập về từ vựng" },
          { id: 3, name: "Big Test" }

        ],
        "ANIMALS": [
          { id: 1, name: "Học từ vựng" },
          { id: 2, name: "Làm bài tập về từ vựng" },
          { id: 3, name: "Big Test" }

        ], "KITCHEN": [
          { id: 1, name: "Học từ vựng" },
          { id: 2, name: "Làm bài tập về từ vựng" },
          { id: 3, name: "Big Test" }

        ], "CLOTHES": [
          { id: 1, name: "Học từ vựng" },
          { id: 2, name: "Làm bài tập về từ vựng" },
          { id: 3, name: "Big Test" }

        ]

      };
      resolve(data[productName] || data[0]);
    });
  };

  return (
    <>
      <BigText>Course Detail</BigText>
      <Container>
        <TableWrapper>
          <thead>
            <TableRow>
              <th colSpan="2"><TableHeader>Course List</TableHeader></th>
            </TableRow>
          </thead>
          <tbody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <td><TableCellId>{item.id}</TableCellId></td>
                <TableCell>{item.name}</TableCell>

              </TableRow>
            ))}
          </tbody>
        </TableWrapper>
        <RightDiv>
          <DivWrapper>
            <DivWrapper2 imageUrl={productImage}>
              <DivWrapper2Text>{productName}</DivWrapper2Text>
            </DivWrapper2>
            <Button to="/vocab"
              state={{ productname: productName }}>Start Learn</Button>
          </DivWrapper>
          <ButtonL><LinkText to="/league">Top League</LinkText></ButtonL>
        </RightDiv>
      </Container>
    </>
  );
};

export default CoursesInfo;
