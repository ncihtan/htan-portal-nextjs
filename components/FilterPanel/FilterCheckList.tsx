import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { ActionMeta } from 'react-select';
import {
    ExploreOptionType,
    IFilterValuesSetByGroupName,
} from '../../lib/types';
import { observer } from 'mobx-react';
import styles from './styles.module.scss';

interface IFilterCheckList {
    setFilter: (actionMeta: ActionMeta<ExploreOptionType>) => void;
    filters: IFilterValuesSetByGroupName;
    options: ExploreOptionType[];
}

const FilterCheckList: FunctionComponent<IFilterCheckList> = observer(function (
    props
) {
    return (
        <div>
            {props.options.map((option) => {
                const id = `cb-${option.group}-${option.value}`;
                const disabled = option.count === 0;
                const checked =
                    option.group in props.filters &&
                    props.filters[option.group].has(option.value);
                return (
                    <div
                        className={classNames('form-check', styles.formCheck)}
                        key={id}
                    >
                        <input
                            className={classNames(
                                'form-check-input',
                                styles.checkboxLabel
                            )}
                            onChange={(e) => {
                                props.setFilter({
                                    option,
                                    action: e.currentTarget.checked
                                        ? 'select-option'
                                        : 'deselect-option',
                                });
                            }}
                            checked={checked}
                            disabled={disabled}
                            type="checkbox"
                            id={id}
                        />
                        <label
                            className={classNames(
                                'form-check-label',
                                styles.checkboxLabel
                            )}
                            htmlFor={id}
                        >
                            {option.label}
                        </label>
                        <div className={styles.fileCount}>{option.count}</div>
                    </div>
                );
            })}
        </div>
    );
});

export default FilterCheckList;
