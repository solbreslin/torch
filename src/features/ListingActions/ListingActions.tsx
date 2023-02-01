import { useState } from 'react';
import { Share, Star } from 'phosphor-react';
import Button from '../../shared/Button/Button';
import { ListingActionsStyled } from './ListingActions.styled';

type Props = {
  id: string;
};

export const ListingActions: React.FC<Props> = ({ id }) => {
  const [sharePanelIsActive, setSharePanelIsActive] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

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

    setIsSaved(!isSaved);
  }

  function handleShare() {
    setSharePanelIsActive(true);
  }

  return (
    <ListingActionsStyled>
      <Button variant={'icon'} onClick={handleSave}>
        <Star
          size={16}
          color={isSaved ? 'orange' : 'currentColor'}
          weight={isSaved ? 'fill' : 'regular'}
        />{' '}
        {isSaved ? <span>Saved</span> : <span>Save</span>}
      </Button>

      <Button variant={'icon'} onClick={handleShare}>
        <Share size={16} />
        <span>Share</span>
      </Button>
    </ListingActionsStyled>
  );
};
