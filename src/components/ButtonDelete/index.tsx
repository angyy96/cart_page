const ButtonDelete = ({
  deleteProduct,
  id,
}: {
  deleteProduct: (id: number) => void
  id: number
}) => {
  return (
    <button type="button" onClick={() => deleteProduct}>
      <img src="./img/icons/cross.svg" alt="Delete" />
    </button>
  )
}

export default ButtonDelete
