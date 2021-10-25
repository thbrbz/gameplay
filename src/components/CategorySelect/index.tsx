import React from 'react';
import { styles } from './styles';
import { ScrollView } from 'react-native';
import { Category } from '../Category';

import { categories } from '../../utils/categories';

type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void; 
    hasCheckBox?: boolean;
}

export function CategorySelect({ categorySelected, setCategory, hasCheckBox = false }: Props){
    return(
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
            style={styles.container}
        >
            {
                categories.map(category => (
                    <Category 
                        key={category.id}
                        title={category.title}
                        icon={category.icon}
                        checked={category.id === categorySelected}
                        onPress={() => setCategory(category.id)}
                        hasCheckBox={hasCheckBox}
                    />
                ))
            }
        </ScrollView>
    );
}