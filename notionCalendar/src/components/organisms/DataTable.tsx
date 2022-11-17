import { useEffect, useState } from "react";
import styled from "styled-components";
import Column from "../molecules/Column";
import DataRow from "../molecules/DataRow";

type TProps = {
  tableName: string;
  data: Array<any>;
};

export interface IData {
  property: string;
  value: Array<any>;
}

const STable = styled.div`
  margin-bottom: 5rem;

  .table_name {
    margin-bottom: 0.5rem;
    & > h2 {
      font-size: 24px;
      text-transform: uppercase;
    }
  }

  .container {
    border-radius: 10px;
    padding-top: 10px;
    border: 1px solid white;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
  }
`;

export interface IColumData {
  propertyName: string;
  value: Array<any>;
}

export default function DataTable({ tableName, data }: TProps) {
  const [column, setColumn] = useState<Array<IColumData>>();

  useEffect(() => {
    if (!data) return;

    // console.log(data);

    const keys = Object.keys(data[0].properties);

    const columnData = keys.map((key) => {
      const obj: IColumData = {
        propertyName: key,
        value: [],
      };

      const _ret = data.map((el) => {
        return el.properties[key];
      });

      obj.value = _ret;
      return obj;
    });

    setColumn(columnData);
  }, []);
  return (
    <STable>
      <div className="table_name">
        <h2>{tableName}</h2>
      </div>
      <div className="container">
        {column
          ? column.map((el, idx) => {
              return <Column key={idx} detailData={el} />;
            })
          : null}
      </div>
    </STable>
  );
}
