type LabelType = {
  text: string | number | undefined | null | Date;
  align?: 'left' | 'right' | 'center';
};

type InputBoxType = {
  placeholder?: string;
  onChangeText: (text: string) => void;
  value?: string;
  multiline?: boolean;
};

type ProfileType = {
  id: number;
  firstName: string;
  lastName: string;
  className: number;
  rollNumber: number;
  picture: string;
  status: 'active' | 'inactive';
  chats: Array<MessageType>;
};

type MessageType = {
  message: string;
  date: Date;
  to: string;
  from: string;
};
