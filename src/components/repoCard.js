import React from "react"
import cardStyle from "./repocard.module.css"

const RepoCard = ({ repo }) => {
  let name = repo.node.name
  let linguagem =
    repo.node.primaryLanguage == null
      ? "Nao Definido"
      : repo.node.primaryLanguage.name
  let descricao = repo.node.description
  let createAt = new Date(repo.node.createdAt)
  let lastCommit = new Date(repo.node.defaultBranchRef.target.committedDate)
  return (
    <div className={cardStyle.wrapper}>
      <div className={cardStyle.desc}>
        <h1>{`${name}`}</h1>
        <p>{`${descricao == null ? "Sem Descrição" : descricao}`}</p>
      </div>
      <div className={cardStyle.infos}>
        <div className={cardStyle.infoItem}>
          <p>Linguagem:{`${linguagem}`}</p>
        </div>
        <div className={cardStyle.infoItem}>
          <p>
            Criado:
            {`${
              createAt.getDate() + 1 < 10
                ? `0${createAt.getDate() + 1}`
                : createAt.getDate() + 1
            }/${
              createAt.getMonth() + 1 < 10
                ? `0${createAt.getMonth() + 1}`
                : createAt.getMonth() + 1
            }/${createAt.getFullYear()}`}
          </p>
        </div>
        <div className={cardStyle.infoItem}>
          <p>
            Último commit:
            {`${
              lastCommit.getDate() + 1 < 10
                ? `0${lastCommit.getDate() + 1}`
                : lastCommit.getDate() + 1
            }/${
              lastCommit.getMonth() + 1 < 10
                ? `0${lastCommit.getMonth() + 1}`
                : lastCommit.getMonth() + 1
            }/${lastCommit.getFullYear()}`}
          </p>
        </div>
      </div>
    </div>
  )
}

export default RepoCard
