import Autocomplete from 'react-autocomplete';
export default function CompanyNamesInput(){
	return <Autocomplete
  	getItemValue={(item) => item.label}
  	items={props.companyNames.map(name =>{
  		return { label: name}
  	})}
  	renderItem={(item, isHighlighted) =>
    <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
      {item.label}
    </div>
  	}
  	value={value}
  	onChange={(e) => value = e.target.value}
  	onSelect={(val) => value = val}
	/>
}