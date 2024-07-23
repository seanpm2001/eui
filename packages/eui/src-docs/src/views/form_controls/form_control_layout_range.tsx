import React from 'react';

import {
  EuiFormControlLayoutDelimited,
  EuiFormLabel,
  EuiFieldNumber,
  EuiIcon,
} from '../../../../src/components';

export default () => (
  <div
    css={{
      display: 'inline-flex',
      flexWrap: 'wrap',
      gap: 24,
    }}
  >
    <EuiFormControlLayoutDelimited
      fullWidth
      startControl={
        <EuiFieldNumber
          placeholder="0"
          className="euiFieldNumber"
          aria-label="Use aria labels when no actual label is in use"
        />
      }
      endControl={
        <EuiFieldNumber
          placeholder="100"
          className="euiFieldNumber"
          aria-label="Use aria labels when no actual label is in use"
        />
      }
    />

    <EuiFormControlLayoutDelimited
      startControl={
        <EuiFieldNumber
          placeholder="0"
          className="euiFieldNumber"
          aria-label="Use aria labels when no actual label is in use"
        />
      }
      endControl={
        <EuiFieldNumber
          placeholder="100"
          className="euiFieldNumber"
          aria-label="Use aria labels when no actual label is in use"
        />
      }
    />

    <EuiFormControlLayoutDelimited
      append={<EuiFormLabel>px</EuiFormLabel>}
      startControl={
        <EuiFieldNumber
          placeholder="0"
          className="euiFieldNumber"
          aria-label="Use aria labels when no actual label is in use"
        />
      }
      endControl={
        <EuiFieldNumber
          placeholder="100"
          className="euiFieldNumber"
          aria-label="Use aria labels when no actual label is in use"
        />
      }
    />

    <EuiFormControlLayoutDelimited
      icon="vector"
      startControl={
        <EuiFieldNumber
          placeholder="0"
          className="euiFieldNumber"
          aria-label="Use aria labels when no actual label is in use"
        />
      }
      endControl={
        <EuiFieldNumber
          placeholder="100"
          className="euiFieldNumber"
          aria-label="Use aria labels when no actual label is in use"
        />
      }
    />

    <EuiFormControlLayoutDelimited
      clear={{ onClick: () => {} }}
      isLoading
      startControl={
        <EuiFieldNumber
          placeholder="0"
          className="euiFieldNumber"
          aria-label="Use aria labels when no actual label is in use"
        />
      }
      endControl={
        <EuiFieldNumber
          placeholder="100"
          className="euiFieldNumber"
          aria-label="Use aria labels when no actual label is in use"
        />
      }
    />

    <EuiFormControlLayoutDelimited
      isLoading
      startControl={
        <EuiFieldNumber
          placeholder="0"
          className="euiFieldNumber"
          aria-label="Use aria labels when no actual label is in use"
        />
      }
      endControl={
        <EuiFieldNumber
          placeholder="100"
          className="euiFieldNumber"
          aria-label="Use aria labels when no actual label is in use"
        />
      }
    />

    <EuiFormControlLayoutDelimited
      compressed
      startControl={
        <EuiFieldNumber
          placeholder="0"
          className="euiFieldNumber"
          aria-label="Use aria labels when no actual label is in use"
        />
      }
      endControl={
        <EuiFieldNumber
          placeholder="100"
          className="euiFieldNumber"
          aria-label="Use aria labels when no actual label is in use"
        />
      }
    />

    <EuiFormControlLayoutDelimited
      prepend={<EuiFormLabel>Add</EuiFormLabel>}
      startControl={
        <EuiFieldNumber
          placeholder="0"
          className="euiFieldNumber"
          aria-label="Use aria labels when no actual label is in use"
        />
      }
      delimiter="+"
      endControl={
        <EuiFieldNumber
          placeholder="100"
          className="euiFieldNumber"
          aria-label="Use aria labels when no actual label is in use"
        />
      }
    />

    <EuiFormControlLayoutDelimited
      prepend={<EuiFormLabel>Merge</EuiFormLabel>}
      startControl={
        <EuiFieldNumber
          placeholder="0"
          className="euiFieldNumber"
          aria-label="Use aria labels when no actual label is in use"
        />
      }
      delimiter={<EuiIcon type="merge" />}
      endControl={
        <EuiFieldNumber
          placeholder="100"
          className="euiFieldNumber"
          aria-label="Use aria labels when no actual label is in use"
        />
      }
    />

    <EuiFormControlLayoutDelimited
      readOnly
      prepend={<EuiFormLabel>Read only</EuiFormLabel>}
      startControl={
        <EuiFieldNumber
          placeholder="0"
          className="euiFieldNumber"
          readOnly
          aria-label="Use aria labels when no actual label is in use"
        />
      }
      endControl={
        <EuiFieldNumber
          placeholder="100"
          className="euiFieldNumber"
          readOnly
          aria-label="Use aria labels when no actual label is in use"
        />
      }
    />

    <EuiFormControlLayoutDelimited
      isDisabled
      prepend={<EuiFormLabel>Disabled</EuiFormLabel>}
      startControl={
        <EuiFieldNumber
          placeholder="0"
          className="euiFieldNumber"
          disabled
          aria-label="Use aria labels when no actual label is in use"
        />
      }
      endControl={
        <EuiFieldNumber
          placeholder="100"
          className="euiFieldNumber"
          disabled
          aria-label="Use aria labels when no actual label is in use"
        />
      }
    />

    <EuiFormControlLayoutDelimited
      isInvalid
      prepend={<EuiFormLabel>Invalid</EuiFormLabel>}
      startControl={
        <EuiFieldNumber
          isInvalid
          controlOnly
          placeholder="0"
          aria-label="Use aria labels when no actual label is in use"
        />
      }
      endControl={
        <EuiFieldNumber
          isInvalid
          controlOnly
          placeholder="100"
          aria-label="Use aria labels when no actual label is in use"
        />
      }
    />
  </div>
);
