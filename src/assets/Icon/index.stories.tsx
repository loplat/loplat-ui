import React from 'react';
import styled from '@emotion/styled';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconProps } from './index';
import {
  AddIcon,
  AlertIcon,
  AndroidIcon,
  AppIcon,
  AppleIcon,
  ArrowDownIcon,
  ArrowDropDownIcon,
  ArrowDropLeftIcon,
  ArrowDropRightIcon,
  ArrowDropUpIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ArticleIcon,
  BeatIcon,
  BedtimeIcon,
  BlockIcon,
  BookIcon,
  BookmarkIcon,
  BookmarkFillIcon,
  BoxAddIcon,
  CachedIcon,
  CalendarIcon,
  CallIcon,
  CallDisabledIcon,
  CameraIcon,
  CampaignIcon,
  CancelcircleFillIcon,
  CancelcircleOutlineIcon,
  CardIcon,
  ChartIcon,
  ChartPieIcon,
  CheckIcon,
  CheckcircleFillIcon,
  CheckcircleOutlineIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CircleIcon,
  ClipIcon,
  ClockIcon,
  CloseIcon,
  CloudIcon,
  CloudDownloadIcon,
  CloudUploadIcon,
  CommandIcon,
  CompassIcon,
  CropIcon,
  CrownIcon,
  DeleteIcon,
  DescriptionIcon,
  DesktopIcon,
  DiamondIcon,
  DoneAllIcon,
  DoubleCheveronDownIcon,
  DoubleCheveronLeftIcon,
  DoubleCheveronRightIcon,
  DoubleCheveronUpIcon,
  DownloadIcon,
  Download2Icon,
  EditIcon,
  EmojiEventIcon,
  FeedIcon,
  FileIcon,
  FileAddIcon,
  FilterIcon,
  FireIcon,
  FlagIcon,
  FolderIcon,
  FolderFillIcon,
  FullscreenIcon,
  GeoGroupIcon,
  GppIcon,
  GppGoodIcon,
  GpsIcon,
  GraphIcon,
  GridLineIcon,
  GridViewIcon,
  HeartIcon,
  HeartFillIcon,
  HeightIcon,
  HomeIcon,
  ImageIcon,
  InboxIcon,
  InfocircleFillIcon,
  InfocircleOutlineIcon,
  KeyIcon,
  LanguageIcon,
  LaptopIcon,
  LaunchIcon,
  LightningIcon,
  LinkIcon,
  ListIcon,
  LockIcon,
  LockOpenIcon,
  MailIcon,
  MapIcon,
  MenuIcon,
  MessageIcon,
  MicOffIcon,
  MicOnIcon,
  MobileIcon,
  MoneyIcon,
  MoreHorizIcon,
  MoreVertIcon,
  MusicIcon,
  NearMeIcon,
  NotificationNewIcon,
  NotificationNoneIcon,
  PasteIcon,
  PeopleAltIcon,
  PersonAddIcon,
  PlaceIcon,
  PluscircleFillIcon,
  PluscircleOutlineIcon,
  PolygonIcon,
  PowerSettingIcon,
  PresentIcon,
  PrintIcon,
  PushPinIcon,
  QuestioncircleFillIcon,
  QuestioncircleOutlineIcon,
  RecOffIcon,
  RecOnIcon,
  RedoIcon,
  RemoveFillIcon,
  RemoveOutlineIcon,
  ResetIcon,
  RocketIcon,
  SearchIcon,
  SettingIcon,
  ShareIcon,
  ShieldIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  SignInIcon,
  SignOutIcon,
  StackIcon,
  StarIcon,
  StarFillIcon,
  StoreIcon,
  StreetViewIcon,
  SunIcon,
  SyncIcon,
  SyncAltIcon,
  TagIcon,
  TargetIcon,
  TextIcon,
  ThumbUpIcon,
  TicketIcon,
  TimerIcon,
  TrashIcon,
  TuneIcon,
  UndoIcon,
  UnfoldLessIcon,
  UnfoldMoreIcon,
  UploadIcon,
  UserIcon,
  UserCircleIcon,
  UserFillIcon,
  VerifiedIcon,
  VerifiedFillIcon,
  VisibilityIcon,
  VisibilityOffIcon,
  VolumeOffIcon,
  VolumeOffsetIcon,
  VolumeOnIcon,
  WalletIcon,
  WarningCircleFillIcon,
  WarningCircleOutlineIcon,
  WatchIcon,
  WaterIcon,
  WaveIcon,
  WidthIcon,
  WifiIcon,
  WriteIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from './index';

const Icons = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid gray;
    margin: 16px;
    min-width: 4rem;
    min-height: 3rem;
    padding: 8px 16px;

    & > span {
      margin-top: 8px;
    }
  }
`;

const IconDocument = (props: IconProps) => {
  return (
    <Icons>
      <div>
        <AddIcon {...props} />
        <span>Add</span>
      </div>

      <div>
        <AlertIcon {...props} />
        <span>Alert</span>
      </div>

      <div>
        <AndroidIcon {...props} />
        <span>Android</span>
      </div>

      <div>
        <AppIcon {...props} />
        <span>App</span>
      </div>

      <div>
        <AppleIcon {...props} />
        <span>Apple</span>
      </div>

      <div>
        <ArrowDownIcon {...props} />
        <span>ArrowDown</span>
      </div>

      <div>
        <ArrowDropDownIcon {...props} />
        <span>ArrowDropDown</span>
      </div>

      <div>
        <ArrowDropLeftIcon {...props} />
        <span>ArrowDropLeft</span>
      </div>

      <div>
        <ArrowDropRightIcon {...props} />
        <span>ArrowDropRight</span>
      </div>

      <div>
        <ArrowDropUpIcon {...props} />
        <span>ArrowDropUp</span>
      </div>

      <div>
        <ArrowLeftIcon {...props} />
        <span>ArrowLeft</span>
      </div>

      <div>
        <ArrowRightIcon {...props} />
        <span>ArrowRight</span>
      </div>

      <div>
        <ArrowUpIcon {...props} />
        <span>ArrowUp</span>
      </div>

      <div>
        <ArticleIcon {...props} />
        <span>Article</span>
      </div>

      <div>
        <BeatIcon {...props} />
        <span>Beat</span>
      </div>

      <div>
        <BedtimeIcon {...props} />
        <span>Bedtime</span>
      </div>

      <div>
        <BlockIcon {...props} />
        <span>Block</span>
      </div>

      <div>
        <BookIcon {...props} />
        <span>Book</span>
      </div>

      <div>
        <BookmarkIcon {...props} />
        <span>Bookmark</span>
      </div>

      <div>
        <BookmarkFillIcon {...props} />
        <span>BookmarkFill</span>
      </div>

      <div>
        <BoxAddIcon {...props} />
        <span>BoxAdd</span>
      </div>

      <div>
        <CachedIcon {...props} />
        <span>Cached</span>
      </div>

      <div>
        <CalendarIcon {...props} />
        <span>Calendar</span>
      </div>

      <div>
        <CallIcon {...props} />
        <span>Call</span>
      </div>

      <div>
        <CallDisabledIcon {...props} />
        <span>CallDisabled</span>
      </div>

      <div>
        <CameraIcon {...props} />
        <span>Camera</span>
      </div>

      <div>
        <CampaignIcon {...props} />
        <span>Campaign</span>
      </div>

      <div>
        <CancelcircleFillIcon {...props} />
        <span>CancelcircleFill</span>
      </div>

      <div>
        <CancelcircleOutlineIcon {...props} />
        <span>CancelcircleOutline</span>
      </div>

      <div>
        <CardIcon {...props} />
        <span>Card</span>
      </div>

      <div>
        <ChartIcon {...props} />
        <span>Chart</span>
      </div>

      <div>
        <ChartPieIcon {...props} />
        <span>ChartPie</span>
      </div>

      <div>
        <CheckIcon {...props} />
        <span>Check</span>
      </div>

      <div>
        <CheckcircleFillIcon {...props} />
        <span>CheckcircleFill</span>
      </div>

      <div>
        <CheckcircleOutlineIcon {...props} />
        <span>CheckcircleOutline</span>
      </div>

      <div>
        <ChevronDownIcon {...props} />
        <span>ChevronDown</span>
      </div>

      <div>
        <ChevronLeftIcon {...props} />
        <span>ChevronLeft</span>
      </div>

      <div>
        <ChevronRightIcon {...props} />
        <span>ChevronRight</span>
      </div>

      <div>
        <ChevronUpIcon {...props} />
        <span>ChevronUp</span>
      </div>

      <div>
        <CircleIcon {...props} />
        <span>Circle</span>
      </div>

      <div>
        <ClipIcon {...props} />
        <span>Clip</span>
      </div>

      <div>
        <ClockIcon {...props} />
        <span>Clock</span>
      </div>

      <div>
        <CloseIcon {...props} />
        <span>Close</span>
      </div>

      <div>
        <CloudIcon {...props} />
        <span>Cloud</span>
      </div>

      <div>
        <CloudDownloadIcon {...props} />
        <span>CloudDownload</span>
      </div>

      <div>
        <CloudUploadIcon {...props} />
        <span>CloudUpload</span>
      </div>

      <div>
        <CommandIcon {...props} />
        <span>Command</span>
      </div>

      <div>
        <CompassIcon {...props} />
        <span>Compass</span>
      </div>

      <div>
        <CropIcon {...props} />
        <span>Crop</span>
      </div>

      <div>
        <CrownIcon {...props} />
        <span>Crown</span>
      </div>

      <div>
        <DeleteIcon {...props} />
        <span>Delete</span>
      </div>

      <div>
        <DescriptionIcon {...props} />
        <span>Description</span>
      </div>

      <div>
        <DesktopIcon {...props} />
        <span>Desktop</span>
      </div>

      <div>
        <DiamondIcon {...props} />
        <span>Diamond</span>
      </div>

      <div>
        <DoneAllIcon {...props} />
        <span>DoneAll</span>
      </div>

      <div>
        <DoubleCheveronDownIcon {...props} />
        <span>DoubleCheveronDown</span>
      </div>

      <div>
        <DoubleCheveronLeftIcon {...props} />
        <span>DoubleCheveronLeft</span>
      </div>

      <div>
        <DoubleCheveronRightIcon {...props} />
        <span>DoubleCheveronRight</span>
      </div>

      <div>
        <DoubleCheveronUpIcon {...props} />
        <span>DoubleCheveronUp</span>
      </div>

      <div>
        <DownloadIcon {...props} />
        <span>Download</span>
      </div>

      <div>
        <Download2Icon {...props} />
        <span>Download2</span>
      </div>

      <div>
        <EditIcon {...props} />
        <span>Edit</span>
      </div>

      <div>
        <EmojiEventIcon {...props} />
        <span>EmojiEvent</span>
      </div>

      <div>
        <FeedIcon {...props} />
        <span>Feed</span>
      </div>

      <div>
        <FileIcon {...props} />
        <span>File</span>
      </div>

      <div>
        <FileAddIcon {...props} />
        <span>FileAdd</span>
      </div>

      <div>
        <FilterIcon {...props} />
        <span>Filter</span>
      </div>

      <div>
        <FireIcon {...props} />
        <span>Fire</span>
      </div>

      <div>
        <FlagIcon {...props} />
        <span>Flag</span>
      </div>

      <div>
        <FolderIcon {...props} />
        <span>Folder</span>
      </div>

      <div>
        <FolderFillIcon {...props} />
        <span>FolderFill</span>
      </div>

      <div>
        <FullscreenIcon {...props} />
        <span>Fullscreen</span>
      </div>

      <div>
        <GeoGroupIcon {...props} />
        <span>GeoGroup</span>
      </div>

      <div>
        <GppIcon {...props} />
        <span>Gpp</span>
      </div>

      <div>
        <GppGoodIcon {...props} />
        <span>GppGood</span>
      </div>

      <div>
        <GpsIcon {...props} />
        <span>Gps</span>
      </div>

      <div>
        <GraphIcon {...props} />
        <span>Graph</span>
      </div>

      <div>
        <GridLineIcon {...props} />
        <span>GridLine</span>
      </div>

      <div>
        <GridViewIcon {...props} />
        <span>GridView</span>
      </div>

      <div>
        <HeartIcon {...props} />
        <span>Heart</span>
      </div>

      <div>
        <HeartFillIcon {...props} />
        <span>HeartFill</span>
      </div>

      <div>
        <HeightIcon {...props} />
        <span>Height</span>
      </div>

      <div>
        <HomeIcon {...props} />
        <span>Home</span>
      </div>

      <div>
        <ImageIcon {...props} />
        <span>Image</span>
      </div>

      <div>
        <InboxIcon {...props} />
        <span>Inbox</span>
      </div>

      <div>
        <InfocircleFillIcon {...props} />
        <span>InfocircleFill</span>
      </div>

      <div>
        <InfocircleOutlineIcon {...props} />
        <span>InfocircleOutline</span>
      </div>

      <div>
        <KeyIcon {...props} />
        <span>Key</span>
      </div>

      <div>
        <LanguageIcon {...props} />
        <span>Language</span>
      </div>

      <div>
        <LaptopIcon {...props} />
        <span>Laptop</span>
      </div>

      <div>
        <LaunchIcon {...props} />
        <span>Launch</span>
      </div>

      <div>
        <LightningIcon {...props} />
        <span>Lightning</span>
      </div>

      <div>
        <LinkIcon {...props} />
        <span>Link</span>
      </div>

      <div>
        <ListIcon {...props} />
        <span>List</span>
      </div>

      <div>
        <LockIcon {...props} />
        <span>Lock</span>
      </div>

      <div>
        <LockOpenIcon {...props} />
        <span>LockOpen</span>
      </div>

      <div>
        <MailIcon {...props} />
        <span>Mail</span>
      </div>

      <div>
        <MapIcon {...props} />
        <span>Map</span>
      </div>

      <div>
        <MenuIcon {...props} />
        <span>Menu</span>
      </div>

      <div>
        <MessageIcon {...props} />
        <span>Message</span>
      </div>

      <div>
        <MicOffIcon {...props} />
        <span>MicOff</span>
      </div>

      <div>
        <MicOnIcon {...props} />
        <span>MicOn</span>
      </div>

      <div>
        <MobileIcon {...props} />
        <span>Mobile</span>
      </div>

      <div>
        <MoneyIcon {...props} />
        <span>Money</span>
      </div>

      <div>
        <MoreHorizIcon {...props} />
        <span>MoreHoriz</span>
      </div>

      <div>
        <MoreVertIcon {...props} />
        <span>MoreVert</span>
      </div>

      <div>
        <MusicIcon {...props} />
        <span>Music</span>
      </div>

      <div>
        <NearMeIcon {...props} />
        <span>NearMe</span>
      </div>

      <div>
        <NotificationNewIcon {...props} />
        <span>NotificationNew</span>
      </div>

      <div>
        <NotificationNoneIcon {...props} />
        <span>NotificationNone</span>
      </div>

      <div>
        <PasteIcon {...props} />
        <span>Paste</span>
      </div>

      <div>
        <PeopleAltIcon {...props} />
        <span>PeopleAlt</span>
      </div>

      <div>
        <PersonAddIcon {...props} />
        <span>PersonAdd</span>
      </div>

      <div>
        <PlaceIcon {...props} />
        <span>Place</span>
      </div>

      <div>
        <PluscircleFillIcon {...props} />
        <span>PluscircleFill</span>
      </div>

      <div>
        <PluscircleOutlineIcon {...props} />
        <span>PluscircleOutline</span>
      </div>

      <div>
        <PolygonIcon {...props} />
        <span>Polygon</span>
      </div>

      <div>
        <PowerSettingIcon {...props} />
        <span>PowerSetting</span>
      </div>

      <div>
        <PresentIcon {...props} />
        <span>Present</span>
      </div>

      <div>
        <PrintIcon {...props} />
        <span>Print</span>
      </div>

      <div>
        <PushPinIcon {...props} />
        <span>PushPin</span>
      </div>

      <div>
        <QuestioncircleFillIcon {...props} />
        <span>QuestioncircleFill</span>
      </div>

      <div>
        <QuestioncircleOutlineIcon {...props} />
        <span>QuestioncircleOutline</span>
      </div>

      <div>
        <RecOffIcon {...props} />
        <span>RecOff</span>
      </div>

      <div>
        <RecOnIcon {...props} />
        <span>RecOn</span>
      </div>

      <div>
        <RedoIcon {...props} />
        <span>Redo</span>
      </div>

      <div>
        <RemoveFillIcon {...props} />
        <span>RemoveFill</span>
      </div>

      <div>
        <RemoveOutlineIcon {...props} />
        <span>RemoveOutline</span>
      </div>

      <div>
        <ResetIcon {...props} />
        <span>Reset</span>
      </div>

      <div>
        <RocketIcon {...props} />
        <span>Rocket</span>
      </div>

      <div>
        <SearchIcon {...props} />
        <span>Search</span>
      </div>

      <div>
        <SettingIcon {...props} />
        <span>Setting</span>
      </div>

      <div>
        <ShareIcon {...props} />
        <span>Share</span>
      </div>

      <div>
        <ShieldIcon {...props} />
        <span>Shield</span>
      </div>

      <div>
        <ShoppingBagIcon {...props} />
        <span>ShoppingBag</span>
      </div>

      <div>
        <ShoppingCartIcon {...props} />
        <span>ShoppingCart</span>
      </div>

      <div>
        <SignInIcon {...props} />
        <span>SignIn</span>
      </div>

      <div>
        <SignOutIcon {...props} />
        <span>SignOut</span>
      </div>

      <div>
        <StackIcon {...props} />
        <span>Stack</span>
      </div>

      <div>
        <StarIcon {...props} />
        <span>Star</span>
      </div>

      <div>
        <StarFillIcon {...props} />
        <span>StarFill</span>
      </div>

      <div>
        <StoreIcon {...props} />
        <span>Store</span>
      </div>

      <div>
        <StreetViewIcon {...props} />
        <span>StreetView</span>
      </div>

      <div>
        <SunIcon {...props} />
        <span>Sun</span>
      </div>

      <div>
        <SyncIcon {...props} />
        <span>Sync</span>
      </div>

      <div>
        <SyncAltIcon {...props} />
        <span>SyncAlt</span>
      </div>

      <div>
        <TagIcon {...props} />
        <span>Tag</span>
      </div>

      <div>
        <TargetIcon {...props} />
        <span>Target</span>
      </div>

      <div>
        <TextIcon {...props} />
        <span>Text</span>
      </div>

      <div>
        <ThumbUpIcon {...props} />
        <span>ThumbUp</span>
      </div>

      <div>
        <TicketIcon {...props} />
        <span>Ticket</span>
      </div>

      <div>
        <TimerIcon {...props} />
        <span>Timer</span>
      </div>

      <div>
        <TrashIcon {...props} />
        <span>Trash</span>
      </div>

      <div>
        <TuneIcon {...props} />
        <span>Tune</span>
      </div>

      <div>
        <UndoIcon {...props} />
        <span>Undo</span>
      </div>

      <div>
        <UnfoldLessIcon {...props} />
        <span>UnfoldLess</span>
      </div>

      <div>
        <UnfoldMoreIcon {...props} />
        <span>UnfoldMore</span>
      </div>

      <div>
        <UploadIcon {...props} />
        <span>Upload</span>
      </div>

      <div>
        <UserIcon {...props} />
        <span>User</span>
      </div>

      <div>
        <UserCircleIcon {...props} />
        <span>UserCircle</span>
      </div>

      <div>
        <UserFillIcon {...props} />
        <span>UserFill</span>
      </div>

      <div>
        <VerifiedIcon {...props} />
        <span>Verified</span>
      </div>

      <div>
        <VerifiedFillIcon {...props} />
        <span>VerifiedFill</span>
      </div>

      <div>
        <VisibilityIcon {...props} />
        <span>Visibility</span>
      </div>

      <div>
        <VisibilityOffIcon {...props} />
        <span>VisibilityOff</span>
      </div>

      <div>
        <VolumeOffIcon {...props} />
        <span>VolumeOff</span>
      </div>

      <div>
        <VolumeOffsetIcon {...props} />
        <span>VolumeOffset</span>
      </div>

      <div>
        <VolumeOnIcon {...props} />
        <span>VolumeOn</span>
      </div>

      <div>
        <WalletIcon {...props} />
        <span>Wallet</span>
      </div>

      <div>
        <WarningCircleFillIcon {...props} />
        <span>WarningCircleFill</span>
      </div>

      <div>
        <WarningCircleOutlineIcon {...props} />
        <span>WarningCircleOutline</span>
      </div>

      <div>
        <WatchIcon {...props} />
        <span>Watch</span>
      </div>

      <div>
        <WaterIcon {...props} />
        <span>Water</span>
      </div>

      <div>
        <WaveIcon {...props} />
        <span>Wave</span>
      </div>

      <div>
        <WidthIcon {...props} />
        <span>Width</span>
      </div>

      <div>
        <WifiIcon {...props} />
        <span>Wifi</span>
      </div>

      <div>
        <WriteIcon {...props} />
        <span>Write</span>
      </div>

      <div>
        <ZoomInIcon {...props} />
        <span>ZoomIn</span>
      </div>

      <div>
        <ZoomOutIcon {...props} />
        <span>ZoomOut</span>
      </div>
    </Icons>
  );
};

export default {
  title: 'Assets/Icon',
  component: IconDocument,
} as ComponentMeta<typeof IconDocument>;

const Template: ComponentStory<typeof IconDocument> = (args: IconProps) => <IconDocument {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 32,
  fillColor: '#000000',
};
