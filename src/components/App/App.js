import DropdownSelect from '../DropdownSelect'
function App () {
  const regions = [
    { value: 'BR1', label: 'BR1' },
    { value: 'EUN1', label: 'EUN1' },
    { value: 'EUW1', label: 'EUW1' },
    { value: 'JP1', label: 'JP1' },
    { value: 'KR', label: 'KR' },
    { value: 'LA1', label: 'LA1' },
    { value: 'LA2', label: 'LA2' },
    { value: 'NA1', label: 'NA1' },
    { value: 'OC1', label: 'OC1' },
    { value: 'PH2', label: 'PH2' },
    { value: 'RU1', label: 'RU1' },
    { value: 'SG2', label: 'SG2' },
    { value: 'TH2', label: 'TH2' },
    { value: 'TR1', label: 'TR1' },
    { value: 'TW2', label: 'TW2' },
    { value: 'VN2', label: 'VN2' }
  ]
  return (
    <div>
      <DropdownSelect placeholder='TEST' options={regions} />
    </div>

  )
}

export default App
