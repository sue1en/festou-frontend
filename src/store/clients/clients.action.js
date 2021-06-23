import {
  getAllClientSvc,
  getByIdClientSvc,
  createClientSvc,
  updateClientSvc,
  activateClientSvc,
  deactivateClientSvc,
  deleteSupplierSvc,
} from '../../services/clients.service';
import TYPES from '../types';
import { toastr } from 'react-redux-toastr';
import { navigate } from '@reach/router';

//TODO: all