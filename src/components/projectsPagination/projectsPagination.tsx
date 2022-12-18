import React from "react";
import cn from "classnames";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { useQuery } from "hooks";
import { StateType } from "ducks/types";
import { Button } from "components/widgets";
import styles from "./projectsPagination.module.scss";

type StateProps = ReturnType<typeof MSTP>;

const ProjectsPagination: React.FC<StateProps> = ({ totalProjects }) => {
  const { pathname } = useLocation();
  const subcategory = pathname.slice(1);
  const SIZE = 20;
  const query = useQuery();
  const totalPages = Math.ceil((totalProjects || 0) / SIZE);
  const page = query.get("page");
  console.log(totalProjects, totalPages, page);
  if (totalPages < 2) return null;
  const selectedPage = page ? +page : 1;
  return (
    <div className={styles.container}>
      <Button
        text={"<"}
        link={`/${subcategory}?page=${page ? +page - 1 : 1}`}
        customClass={cn(styles.link, {
          [styles.link__disabled]: selectedPage === 1,
        })}
        disabled={selectedPage === 1}
      />
      {Array(totalPages)
        .fill(null)
        .map((_, index) => {
          if (+selectedPage === +index + 1)
            return (
              <div className={styles.currentPage} key={index + 1}>
                {index + 1}
              </div>
            );
          return (
            <Button
              text={`${index + 1}`}
              link={`/${subcategory}?page=${index + 1}`}
              key={index + 1}
              customClass={styles.link}
            />
          );
        })}
      <Button
        text={">"}
        link={`/${subcategory}?page=${page ? +page + 1 : 1}`}
        customClass={cn(styles.link, {
          [styles.link__disabled]: selectedPage === totalPages,
        })}
        disabled={selectedPage === totalPages}
      />
    </div>
  );
};

const MSTP = ({ totalProjects }: StateType) => ({ totalProjects });

export default connect(MSTP)(ProjectsPagination);
