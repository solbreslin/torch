import Button from '../../shared/Button/Button';
import { useState } from 'react';
import { Heart, Share } from 'phosphor-react';

type Props = {
  id: string;
};

export const ListingActions: React.FC<Props> = ({ id }) => {
  const [sharePanelIsActive, setSharePanelIsActive] = useState(false);

  function handleSave() {
    /*
      Example...

      await fetch('api/save',
       {
        method: 'POST',
           headers: {
             'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
         body: JSON.stringify(id)
        }
      )
    */
  }

  function handleShare() {
    setSharePanelIsActive(true);
  }

  return (
    <div>
      <Button onClick={handleSave}>
        <Heart size={16} /> Save
      </Button>
      <Button onClick={handleShare}>
        <Share size={16} /> Share
      </Button>
    </div>
  );
};
