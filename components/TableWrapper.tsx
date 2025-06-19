const TableWrapper = ({ children }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table role="table" aria-label="Table">{children}</table>
    </div>
  )
}

export default TableWrapper
