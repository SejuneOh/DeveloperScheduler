import React, { useEffect } from "react";
import styled from "styled-components";
import { IGoals, IProjects, IActions } from "../../interfaces/ICommon";
import Cell from "../atoms/Cell";
import { IColumData, IData } from "../organisms/DataTable";

const SColumn = styled.div`
  .column_title {
    text-align: center;
  }
  .cell_container {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    align-items: center;
    margin: 1rem 0;
    gap: 1rem;
  }
`;
interface IProps {
  detailData: IColumData | null;
}

export default function Column({ detailData }: IProps) {
  useEffect(() => {
    // console.log(detailData);

    return () => {};
  }, []);

  return (
    <SColumn>
      {/* title */}
      <div className="column_title">
        {detailData ? (
          <Cell isTitle={true} isEdit={false} data={detailData.propertyName} />
        ) : null}
      </div>

      {/* data */}
      <div className="cell_container">
        {detailData?.value
          ? detailData.value.map((el, idx) => {
              return (
                <Cell key={idx} isTitle={false} isEdit={false} data={el} />
              );
            })
          : null}
      </div>
    </SColumn>
  );
}
