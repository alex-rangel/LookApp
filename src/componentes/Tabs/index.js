import react from "react";
import { Text, ScrollView,Touchable,Box } from "../../componentes"
import { colors } from "../../styles/tema.json"

const Tabs = ({ tabs = [], active = '', onChange = (tab) => {} }) => {

    const totalTabs = tabs?.length
    const activeTabStyle = {
        borderBottomWidth: 3,
        borderBottomColor: colors.danger
    }

    return(
        <Box row height='60px'>
            {tabs?.map(tab => (
                <Touchable
                    background='light'
                    style={[{
                            minWidth: `${100 / totalTabs}%`,
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100%',   
                        },
                        active === tab.value ? activeTabStyle  : {}
                    ]}
                    onPress={() => onChange(tab.value)}
                
                >
                    <Text color={active === tab.value ? 'primary' : undefined}>{tab.label}</Text>
                </Touchable>
            ))}
            
        </Box>  
    )
}

export default Tabs