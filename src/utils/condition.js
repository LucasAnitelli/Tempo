export function condition(condition){
    switch(condition){
        case 'storm': 
        return icon = {
            name: 'rainy-outline',
            color: '#1ec9ff'
        };
        break;
        case 'clear_day':
        return icon = {
            name: 'partly-sunny-outline',
            color: '#FF8300'
        };
        break; 
        case 'rain':
        return icon = { 
        name: 'rainy-outline',
            color: '#1ec9ff'
        };
        break;
    default: 
    return icon = {
        name: 'cloud-outline',
            color: '#1ec9ff'
        };
    }
}