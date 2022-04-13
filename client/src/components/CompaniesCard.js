function CompaniesCard ({company}) {

    const { name, symbol } = company

    return (
        <div>
            <div>{name}</div>
            <div>{symbol}</div>
        </div>
    )
}

export default CompaniesCard